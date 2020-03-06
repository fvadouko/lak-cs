import "./index.css";
import React from "react";
import {
  extend,
  L10n,
  loadCldr,
  isNullOrUndefined
} from "@syncfusion/ej2-base";
import {
  DragAndDrop,
  ExcelExport,
  Inject,
  Resize,
  ResourceDirective,
  ResourcesDirective,
  ScheduleComponent,
  TimelineMonth,
  TimelineViews,
  ViewDirective,
  ViewsDirective
} from "@syncfusion/ej2-react-schedule";
import * as gregorian from "cldr-data/main/fr/ca-gregorian.json";
import * as numbers from "cldr-data/main/fr/numbers.json";
import * as timeZoneNames from "cldr-data/main/fr/timeZoneNames.json";
import * as numberingSystems from "cldr-data/supplemental/numberingSystems.json";

import eventApi from "../../services/eventApi";
import * as localeTexts from "./locale.json";
import { SampleBase } from "./sample-base";

import moment from "moment";
import $ from "jquery";

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

//L10n.load(JSON.parse(localeTexts));
L10n.load(localeTexts);
var newDataEmployeeArray = [];
var count = 0;

// TODO : faire afficher les employés après mises à jour du composant

/**
 * schedule block events sample
 */
export default class BlockEvents extends SampleBase {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alreadySent: false,
      employeeData: []
    };
  }

  componentDidMount() {
    this.handleFetches();
  }

  componentDidUpdate() {
    this.employeeData = newDataEmployeeArray;
  }

  async handleFetches() {
    try {
      const data = await eventApi.findEvents();

      data.forEach(dt => {
        dt.user = parseInt(dt.user.substr(12));
      });

      let map = {
        title: "Subject",
        start: "StartTime",
        endt: "EndTime",
        allday: "IsAllDay",
        user: "EmployeeId",
        description: "Description",
        repeat: "RecurrenceRule"
      };

      let newDataArray = [];
      data.forEach(dt => {
        if (
          dt.repeat == "Never" ||
          dt.repeat == "Daily" ||
          dt.repeat == "Weekly" ||
          dt.repeat == "Monthly" ||
          dt.repeat == "Yearly"
        ) {
          dt.repeat = null;
        }

        let mapped = Object.keys(dt).map(oldKey => {
          let newKey = map[oldKey];
          let result = {};
          result[newKey] = dt[oldKey];
          return result;
        });

        let result = mapped.reduce((result, item) => {
          let key = Object.keys(item)[0];
          result[key] = item[key];
          return result;
        }, {});
        newDataArray.push(result);
      });

      this.data = extend([], newDataArray, null, true);
      const dataOne = await eventApi.findUsers();

      map = {
        firstname: "Text",
        id: "Id",
        designation: "Designation"
      };

      newDataEmployeeArray = [];
      dataOne.forEach(dt => {
        let mapped = Object.keys(dt).map(oldKey => {
          let newKey = map[oldKey];
          let result = {};
          result[newKey] = dt[oldKey];
          return result;
        });

        let result = mapped.reduce((result, item) => {
          let key = Object.keys(item)[0];
          result[key] = item[key];
          return result;
        }, {});
        newDataEmployeeArray.push(result);
      });

      this.employeeData = newDataEmployeeArray;

      this.setState({ loading: true });
    } catch (error) {
      console.error("Erreur lors du chargement des evenements !");
    }
  }

  onPopupOpen(args) {
    if (args.type !== "Editor") {
      if (args.data.startTime) {
        let start = new Date(args.data.startTime.toString().substr(0, 15));
        var dateObj = new Date(start);
        var momentObj = moment(dateObj);
        var momentStringStart = momentObj.format("YYYY-MM-DD").toString();

        var dateObj = new Date();
        var momentObj = moment(dateObj);
        var momentStringNow = momentObj.format("YYYY-MM-DD").toString();

        if (moment(momentStringNow).isSame(momentStringStart) === false) {
          if (moment(momentStringNow).isAfter(momentStringStart)) {
            args.cancel = true;
          }
        }
        if (args.data.StartTime) {
          let start = new Date(args.data.StartTime.toString().substr(0, 15));

          var dateObj = new Date(start);
          var momentObj = moment(dateObj);
          var momentStringStart = momentObj.format("YYYY-MM-DD").toString();

          var dateObj = new Date();
          var momentObj = moment(dateObj);
          var momentStringNow = momentObj.format("YYYY-MM-DD").toString();

          if (moment(momentStringNow).isSame(momentStringStart) === false) {
            if (moment(momentStringNow).isAfter(momentStringStart)) {
              args.cancel = true;
            }
          }
        }
      }
    } else if (args.type === "Editor") {
      let start = new Date(args.data.StartTime.toString().substr(0, 15));

      var dateObj = new Date(start);
      var momentObj = moment(dateObj);
      var momentStringStart = momentObj.format("YYYY-MM-DD").toString();

      var dateObj = new Date();
      var momentObj = moment(dateObj);
      var momentStringNow = momentObj.format("YYYY-MM-DD").toString();

      if (moment(momentStringNow).isSame(momentStringStart) === false) {
        if (moment(momentStringNow).isAfter(momentStringStart)) {
          args.cancel = true;
        }
      }
    }
    this.setState({ alreadySent: false });
  }

  onActionBegin(args) {
    if (args.requestType === "toolbarItemRendering") {
      let exportItem = {
        align: "Right",
        showTextOn: "Both",
        prefixIcon: "e-icon-schedule-excel-export",
        text: "Excel Export",
        cssClass: "e-excel-export",
        click: this.onExportClick.bind(this)
      };
      args.items.push(exportItem);
    }
    if (args.requestType === "eventCreate") {
      if (!this.state.alreadySent) {
        eventApi.create(
          args.data[0].Subject !== null && args.data[0].Subject !== undefined
            ? args.data[0].Subject
            : "",
          args.data[0].Location !== null && args.data[0].Location !== undefined
            ? args.data[0].Location
            : "",
          new Date(args.data[0].StartTime),
          new Date(args.data[0].EndTime),
          args.data[0].IsAllDay !== null && args.data[0].IsAllDay !== undefined
            ? args.data[0].IsAllDay
            : false,
          args.data[0].EmployeeId !== null &&
            args.data[0].EmployeeId !== undefined
            ? args.data[0].EmployeeId
            : 1,
          args.data[0].Description !== null &&
            args.data[0].Description !== undefined
            ? args.data[0].Description
            : "",
          args.data[0].RecurrenceRule !== null &&
            args.data[0].RecurrenceRule !== undefined
            ? args.data[0].RecurrenceRule
            : "Never",
          args.data[0].StartTimezone !== null &&
            args.data[0].StartTimezone !== undefined
            ? args.data[0].StartTimezone
            : ""
        );
        this.setState({ alreadySent: true });
      }
    }
  }

  onEventRendered(args) {
    console.log(args);
    count++;
    console.log(count);
    let td = (
      <div class="row" style={{ height: "60px" }}>
        <div class="col">
          <br /> 1
        </div>
      </div>
    );
    $(".e-schedule-table.e-outer-table > tbody > tr:last").append(td);
    console.log(count);
  }

  onExportClick() {
    let exportValues = {
      fields: ["Id", "Subject", "StartTime", "EndTime", "Location", "Text"]
    };
    this.scheduleObj.exportToExcel(exportValues);
  }

  getEmployeeName(value) {
    return value.resourceData[value.resource.textField];
  }

  getEmployeeImage(value) {
    let resourceName = this.getEmployeeName(value);
    return resourceName.toLowerCase();
  }

  getEmployeeDesignation(value) {
    return value.resourceData.Designation;
  }

  resourceHeaderTemplate(props) {
    return (
      <div className="template-wrap">
        <div className="employee-category">
          <div
            className={"employee-image " + this.getEmployeeImage(props)}
          ></div>
          <div className="employee-name">{this.getEmployeeName(props)}</div>
          <div className="employee-designation">
            {this.getEmployeeDesignation(props)}
          </div>
        </div>
      </div>
    );
  }
  render() {
    this.employeeData = newDataEmployeeArray;
    console.log(newDataEmployeeArray);
    return (
      <div class="container">
        {this.state.loading ? (
          <div className="d-flex schedule-control-section">
            <div className="p-2 w-100 control-section">
              <div className="control-wrapper drag-sample-wrapper">
                <div className="schedule-container">
                  <ScheduleComponent
                    locale="fr"
                    dateFormat="dd/MM/yyyy"
                    firstDayOfWeek={1}
                    ref={schedule => (this.scheduleObj = schedule)}
                    cssClass="block-events"
                    width="100%"
                    height="650px"
                    selectedDate={new Date()}
                    currentView="TimelineWeek"
                    resourceHeaderTemplate={this.resourceHeaderTemplate.bind(
                      this
                    )}
                    eventSettings={{
                      dataSource: this.data
                    }}
                    group={{
                      enableCompactView: false,
                      resources: ["Employee"]
                    }}
                    timeScale={{ enable: false, interval: 60, slotCount: 6 }}
                    actionBegin={this.onActionBegin.bind(this)}
                    popupOpen={this.onPopupOpen.bind(this)}
                    eventRendered={this.onEventRendered.bind(this)}
                  >
                    <ResourcesDirective>
                      <ResourceDirective
                        field="EmployeeId"
                        title="Employees"
                        name="Employee"
                        allowMultiple={true}
                        dataSource={this.employeeData}
                        textField="Text"
                        idField="Id"
                        colorField="Color"
                      ></ResourceDirective>
                    </ResourcesDirective>
                    <ViewsDirective>
                      {/* <ViewDirective displayName="Aujourd'hui" option="Day" /> */}
                      <ViewDirective displayName="Jour" option="TimelineDay" />
                      <ViewDirective
                        displayName="Semaine"
                        option="TimelineWeek"
                      />
                      <ViewDirective
                        displayName="Mois"
                        option="TimelineMonth"
                      />
                    </ViewsDirective>
                    <Inject
                      services={[
                        TimelineViews,
                        TimelineMonth,
                        Resize,
                        DragAndDrop,
                        ExcelExport
                      ]}
                    />
                  </ScheduleComponent>
                </div>
              </div>
              {/* </div> */}
            </div>
            {/*   <div className="p-2 w-20 control-section "> 
              <br />
              <br />
              <br />
              <div className="text-center">
                <strong>Total</strong>
                {console.log(this.employeeData)}
                <br />
                {newDataEmployeeArray.length > 0 &&
                  this.employeeData.map(d => {
                    // return (
                      
                    // );
                  })}
              </div>
            </div>
           */}
          </div>
        ) : (
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-center" style={{ marginLeft: "35px" }}>
              Chargement du planning, veuillez patienter un instant...
            </p>{" "}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }
}

//render(<BlockEvents />, document.getElementById("sample"));
