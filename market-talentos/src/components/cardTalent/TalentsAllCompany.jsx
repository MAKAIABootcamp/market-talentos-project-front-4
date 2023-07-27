import React, { useEffect } from "react";
import { listTalents } from "../../redux/actions/userActions";
import { saveTalentId } from "../../redux/actions/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styleTallenAllCompany.scss";

const TalentsAllCompany = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const talentsList = useSelector((store) => store.userTalents);

  useEffect(() => {
    dispatch(listTalents());
  }, [dispatch]);

  const handleNavigate = (id) => {
    dispatch(saveTalentId(id));
    navigate(`/talentDetails/${id}`);
  };
  return (
    <>
     <main className="talentsCompany">
      <div className="talentsCompany__containerall">
        <div className="talentsCompany__container-cards">
          {talentsList.userTalents?.map((talent, index) => {
            return (
              <div
                className="talentsCompany__container"
                key={index}
                onClick={() => handleNavigate(talent.id)}
              >
                <div className="talentsCompany__container-imgTalent">
                  <figure className="talentsCompany__card-figure">
                    <img src={talent.photoURL} alt="imgTalent" />
                  </figure>
                </div>
                <div className="talentsCompany__container-info">
                  <div className="talentsCompany__container-state">
                  </div>
                  <div className="talentsCompany__line"></div>
                  <div className="talentsCompany__container-infoPnal">
                    <span className="talentsCompany__name">
                      <strong>{talent.firstName}</strong>
                    </span>
                    <span className="talentsCompany__lastName">
                      <strong>{talent.lastName}</strong>
                    </span>
                    <span className="talentsCompany__know">{talent.rol}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>

    </>
  )
}

export default TalentsAllCompany