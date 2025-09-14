// Profile Controller

import profileModel from "../models/profileModel.js";

const profileController ={
  async getProfiles(req, res, next){
     try{
      const profiles = await profileModel.getAllProfiles();
      res.json(profiles);
     }catch(err){
      res.status(500).json({ error: err.message})
     }
  },
  
  async addProfile(req, res){
    try{
      const {name, email, phone, location} = res.body;
      const newProfile = await profileModel.updateProfile(name, email, phone, location);
      res.json(newProfile);
    } catch(err) {
      res.status(500).json({errror: err.message});
    }
  }
}
export default profileController;