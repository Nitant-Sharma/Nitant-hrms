import pool from "../db.js";
// update profile
const profileModel ={
    async getAllProfiles(){
      const result = await pool.query("SELECT * FROM public.profiles");
      return result.rows;
    },
    async updateProfile(name, email, phone, location){
        const result = await pool.query(`INSERT INTO public.profiles (name, email, phone, location)
            VALUES ($1, $2, $3, $4) RETURNING *`, [name, email, phone, location]);
            console.log(result);
            return result.rows[0]; 
    }
}
export default profileModel;