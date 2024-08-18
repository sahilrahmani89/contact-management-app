import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store/store";
import { addContact, deleteContact, updateContact } from "../feature/contact/contactSlice";

interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    status: "active" | "inactive";
  }

const ContactsPage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const dispatch = useDispatch();
  const [formVisible, setFormVisible] = useState(false); // this state will check to show form ,ie if we click on create
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [formData, setFormData] = useState<Contact>({
    id: "",
    firstName: "",
    lastName: "",
    status: "active",
  }); 
  // contains state which will update on slicer

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, status: e.target.value as "active" | "inactive" });
  };

  const handleSubmit = () => {
    if (editingContact) {
      dispatch(updateContact(formData));
      setEditingContact(null);
    } else {
      dispatch(addContact({ ...formData, id: uuidv4() }));
    }
    setFormVisible(false);
    setFormData({ id: "", firstName: "", lastName: "", status: "active" });
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setFormData(contact);
    setFormVisible(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-50">
      <button
        onClick={() => setFormVisible(!formVisible)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {formVisible ? "Cancel" : "Create Contact"}
      </button>

      {formVisible && (
        <div className="mt-4 bg-white p-6 rounded shadow-md w-full max-w-md">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <div className="mb-2">
            <label className="mr-2">Status:</label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={handleStatusChange}
            />{" "}
            Active
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={formData.status === "inactive"}
              onChange={handleStatusChange}
              className="ml-4"
            />{" "}
            Inactive
          </div>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            {editingContact ? "Update Contact" : "Create Contact"}   
            {/* Update button name according to create and edit */}
          </button>
        </div>
      )}

      {contacts.length === 0 ? (
        <p className="mt-8 text-gray-500">No contact found. Please add contact.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {contacts.map((contact: any) => (
            <div
              key={contact.id}
              className="bg-white p-4 rounded shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  {contact.firstName} {contact.lastName}
                </h3>
                <p className="text-gray-600">Status: {contact.status}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(contact)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
