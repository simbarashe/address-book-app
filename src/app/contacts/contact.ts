import { CommunicationDetail } from './communicationdetail';
import { Tag } from './tag';

export class Contact {
    id: number;
    firstName: string;
    lastName: string;
    companyName: string;
    designation: string;
    communicationDetails: CommunicationDetail[]=[];
    tags: Tag[]=[];
}