import { LightningElement, wire, api } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import getContactList from "@salesforce/apex/ContactController.getContactList";

export default class ContactList extends NavigationMixin(LightningElement) {
  @api recordId = "0015w000028JpNgAAK"; // I pulled this from a Salesforce Account

  @wire(getContactList, { recordId: "$recordId" })
  contacts;

  handleContactView(event) {
    const contactId = event.detail;
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: contactId,
        opjectApiName: "Contact",
        actionName: "view"
      }
    });
  }
}
