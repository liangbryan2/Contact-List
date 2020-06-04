import { LightningElement, api } from 'lwc';

export default class ContactTile extends LightningElement {
    @api contact;

    handleOpenContact() {
        const selectEvent = new CustomEvent("opencontact", {
            detail: this.contact.Id
        });
        this.dispatchEvent(selectEvent);
    }
}