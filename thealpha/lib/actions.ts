const bcrypt = require("bcryptjs")

export async function bcryptWrapper(target: string):Promise<string>{
  const hash=await new Promise<string>((resolve,reject)=>{
    bcrypt.hash(target, 10, async function (err?: Error, hash?: string) {
      if (err) {
        reject("Error");
      } else if(hash){
        resolve(hash);
      }else{
        resolve("Fkurself")
      }
    });
  })
  return hash
}

export function bcryptCompare(input:string,target:string):boolean{
  return bcrypt.compareSync(input,target)
}
