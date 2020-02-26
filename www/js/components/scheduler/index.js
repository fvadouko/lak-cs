import "./index.css";

import { extend, L10n, loadCldr } from "@syncfusion/ej2-base";
import {
  Day,
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
import * as _ from "lodash";
import * as React from "react";

import postApi from "../../services/eventApi";
import * as dataSource from "./datasource.json";
import * as localeTexts from "./locale.json";
import { SampleBase } from "./sample-base";

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

//L10n.load(JSON.parse(localeTexts));
L10n.load(localeTexts);

/**
 * schedule block events sample
 */
export default class BlockEvents extends SampleBase {
  constructor() {
    super(...arguments);

    this.handleDelete();

    this.employeeData = [
      {
        Text: "Alice",
        Id: 1,
        GroupId: 1,
        Color: "#bbdc00",
        Designation: "Content writer"
      },
      {
        Text: "Nancy",
        Id: 2,
        GroupId: 2,
        Color: "#9e5fff",
        Designation: "Designer"
      },
      {
        Text: "Robert",
        Id: 3,
        GroupId: 1,
        Color: "#bbdc00",
        Designation: "Software Engineer"
      },
      {
        Text: "Robson",
        Id: 4,
        GroupId: 2,
        Color: "#9e5fff",
        Designation: "Support Engineer"
      },
      {
        Text: "Laura",
        Id: 5,
        GroupId: 1,
        Color: "#bbdc00",
        Designation: "Human Resource"
      },
      {
        Text: "Margaret",
        Id: 6,
        GroupId: 2,
        Color: "#9e5fff",
        Designation: "Content Analyst"
      }
    ];
  }
  async handleDelete() {
    try {
      const data = await postApi.findEvents();

      data.forEach(dt => {
        dt.user = parseInt(dt.user.substr(12));
      });

      let map = {
        title: "Subject",
        start: "StartTime",
        endt: "EndTime",
        allday: "IsAllDay",
        user: "EmployeeId",
        description: "Description"
      };

      let newDataArray = [];
      data.forEach(dt => {
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
      console.log(newDataArray);
      this.data = extend([], newDataArray, null, true);
      const dataOne = await postApi.findUsers();
      map = {
        firstname: "Text",
        id: "Id",
        designation: "Designation"
      };

      newDataArray = [];
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
        newDataArray.push(result);
      });
      console.log(newDataArray);
      this.employeeData = newDataArray;
    } catch (error) {
      console.error("Erreur lors du chargement des evenements !");
    }
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
    return (
      <div className="col-lg-10 schedule-control-section">
        {/* <div class="row"> */}
        <div className=" control-section">
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
                resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
                eventSettings={{
                  dataSource: this.data
                }}
                group={{
                  enableCompactView: false,
                  resources: ["Employee"]
                }}
                timeScale={{ enable: false, interval: 60, slotCount: 6 }}
                actionBegin={this.onActionBegin.bind(this)}
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
                  <ViewDirective displayName="Semaine" option="TimelineWeek" />
                  <ViewDirective displayName="Mois" option="TimelineMonth" />
                </ViewsDirective>
                <Inject
                  services={[
                    Day,
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
        </div>
        {/*<div className="col-lg-2 control-section">Total</div>
        </div> */}
      </div>
    );
  }
}

//render(<BlockEvents />, document.getElementById("sample"));
