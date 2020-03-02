import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../services/userApi";

const Enrgistrement = props => {
  const [lastname, setLastname] = useState("Prénom");
  const [firstname, setFirstname] = useState("Nom");
  const [designation, setDesignation] = useState("Désignation");
  const [picture, setPicture] = useState(
    "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
  );
  const [loading, setLoading] = useState(0);
  /**
   * Gestion des changements des inputs dans le formulaire
   * @param {*} param0
   */
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    if (name == "firstname") {
      setFirstname(value);
      setPicture(value + ".png");
    }
    if (name == "lastname") {
      setLastname(value);
    }
    if (name == "designation") {
      setDesignation(value);
    }
    if (name == "picture") {
      setPicture(value);
    }
    //setEmployee({ ...employee, [name]: value });
  };

  /**
   * Gestion de la soumission du formulaire
   * @param {*} event
   */
  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(1);
    const input = document.querySelector('input[type="file"]');
    try {
      let success = await userApi.create(
        firstname,
        lastname,
        designation,
        input.files[0]
      );
      if (success) {
        setLoading(2);
        console.log(success);
        let data = JSON.parse(success);
        setPicture(data.picture);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section id="cover">
      <div id="cover-caption">
        <div class="container">
          <div class="row text-white">
            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <div class="px-2">
                <form onSubmit={handleSubmit} class="justify-content-center">
                  <div class="form-group">
                    <label class="sr-only">Nom</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nom"
                      name="lastname"
                      value={lastname}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label class="sr-only">Prénom</label>
                    <input
                      type="text"
                      class="form-control"
                      name="firstname"
                      placeholder="Prénom"
                      value={firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      name="designation"
                      required="required"
                      value={designation}
                      onChange={handleChange}
                    >
                      <option>Désignation</option>
                      <option>Ressource Humaine</option>
                      <option>Caisse</option>
                      <option>Comptable</option>
                    </select>
                  </div>
                  <div class="form-group mt-3 md-form">
                    <div class="file-field">
                      <div class="mb-4 text-center">
                        <img
                          src={picture}
                          class="rounded-circle z-depth-1-half avatar-pic"
                          alt="example placeholder avatar"
                          style={{ width: "80px" }}
                        />

                        <br />
                        <div className="text-center" style={{ color: "#000" }}>
                          Photo
                        </div>
                      </div>
                      <div class="panel">
                        <div class="button_outer">
                          <div class="btn_upload">
                            <input
                              type="file"
                              id="upload_file"
                              name="picture"
                              style={{ color: "#000" }}
                            />
                          </div>
                          <div class="processing_bar"></div>
                          <div class="success_box"></div>
                        </div>
                      </div>
                      <div class="error_msg"></div>
                      <div class="uploaded_file_view" id="uploaded_view">
                        <span class="file_remove">X</span>
                      </div>
                    </div>
                  </div>

                  {loading === 0 && (
                    <button type="submit" class="btn btn-light btn-lg">
                      S'enregister
                    </button>
                  )}
                  {loading === 1 && (
                    <button type="submit" class="btn btn-light btn-lg">
                      Enregistrement en cours ...
                    </button>
                  )}
                  {loading === 2 && (
                    <button type="submit" class="btn btn-success btn-lg">
                      Enregistré
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrgistrement;
