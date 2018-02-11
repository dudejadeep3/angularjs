import { Collectable } from "./collectable.model";

export class CollectableService {
    private collectables:Collectable[]=[
        {description:'A very rare copy of "JQuery for Dummies"',type:'Book'},
        {description:'The First Letter ever written',type:'Piece of Paper'},
        {description:'A Photograph showing nothing',type:'Photo'},
        {description:'A Box with sold zunes',type:'Garbage'}
      ];

      private collection:Collectable[] =[];

    getCollectables(){
        return this.collectables;
    }
    
    getCollection(){
        return this.collection;
    }

    addToCollection(item:Collectable){
        if(this.collection.indexOf(item)!==-1){
            return;
        }
        this.collection.push(item);
    }

    removeFromCollection(item:Collectable){
        this.collection.splice(this.collection.indexOf(item),1);
    }
}