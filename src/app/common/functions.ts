

 export function validEtat(obj: any) {
   if (obj) {
     if (obj.valid === true) {
       this.validT.delete(obj.field);
     } else {
       this.validT.add(obj.field);
     }
   }
   console.log(obj, this.validT);
 }

 // validEtat(obj) {
 //   if (obj) {
 //     if (obj.valid === true) {
 //       this.validT.delete(obj.field);
 //     } else {
 //       this.validT.add(obj.field);
 //     }
 //   }
 //   console.log(obj, this.validT);
 //
 // }
