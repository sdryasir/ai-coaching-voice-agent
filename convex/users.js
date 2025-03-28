
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateUser= mutation({
    args:{
        name:v.string(),
        email:v.string(),
    },
    handler: async (ctx,{name,email})=>{
        const user=await ctx.db.query('users').filter(q=>q.eq(q.field('email'), email)).collect();
        const data = {
            name: name,
            email: email,
            credits:5000
        }
        if(user.length==0) {
            const result = await ctx.db.insert('users', data);
            console.log('User Created', result);
            return data;
        }
        console.log('User already exists', user[0]);
        return user[0];
    }
});