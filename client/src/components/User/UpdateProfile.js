import React, { Fragment, useState, useEffect } from "react";
import "./UpdateProfile.css";
import Loader from "../layout/Loader/Loader";
import { MdMailOutline } from "react-icons/md";
import { BiFace } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";

import {
  clearErrors,
  loadUser,
  updateProfile,
} from "../../actions/userActions";
import { useAlert } from "react-alert";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";

const UpdateProfile = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user } = useSelector((state) => state.user);
  console.log(user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const updateProfileSubmit = (e) => {
    const myForm = new FormData();

    e.preventDefault();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatar(user.avatar);
      setAvatarPreview(user.avatar.url);
    }
    if (error) {
      alert.show(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loadUser());

      history.push("/account");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, history, user, isUpdated]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='Update Profile' />
          <div className='updateProfileContainer'>
            <div className='updateProfileInputBox'>
              <h2>Update Profile</h2>
              <form
                className='updateProfileForm'
                encType='multipart/form-data'
                onSubmit={updateProfileSubmit}>
                <div className='updateProfileName'>
                  <BiFace />
                  <input
                    type='text'
                    placeholder='Name'
                    required
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='updateProfileEmail'>
                  <MdMailOutline />
                  <input
                    type='email'
                    placeholder='Email'
                    required
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div id='updateProfileImage'>
                  <img src={avatarPreview} alt='Avatar Preview' />
                  <input
                    type='file'
                    name='avatar'
                    accept='image/'
                    onChange={updateProfileDataChange}
                  />
                </div>

                <input
                  type='submit'
                  value='Update'
                  className='updateProfileBtn'
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default UpdateProfile;