import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from 'react-bootstrap';

export const BuildingForm = ({ submit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');

    const onSubmit = (e) => {
        e.preventDefault();
        const newPet = {
            name,
            description,
            avatar
        };
        submit(newPet);
    }

    const onNameChanged = (e) => {
        setName(e.target.value);
    }

    const onAvatarChanged = (e) => {
        setAvatar(e.target.value);
    }

    const onDescriptionChanged = (e) => {
        setDescription(e.target.value);
    }


    return (
        <Form className="p-3" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="pets-name">
                <Form.Label>Pets name</Form.Label>
                <Form.Control type="text" placeholder="Enter animal alias" value={name} onChange={onNameChanged}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="pets-avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="text" placeholder="Enter url to the pets photo" value={avatar} onChange={onAvatarChanged}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="pets-description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Leave some short description"
                    style={{ height: '100px' }}
                    value={description}
                    onChange={onDescriptionChanged}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}