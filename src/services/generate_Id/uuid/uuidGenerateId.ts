import { IGenerateId } from "../IGenerateId";
import { v4 as uuidv4 } from 'uuid';

export class uuidGenerateId implements IGenerateId {

    async generateId(): Promise<string> {

        const newId = await uuidv4();

        return newId

    }

}