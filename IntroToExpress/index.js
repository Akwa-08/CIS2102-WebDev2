const express = require("express");

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

const items = [];

app.get("/items", (request, response) => {
    return response.status(200).json({ data: items });
});

app.get("/items/:id", (request, response) => {
    const foundItem = items.find((obj) => obj.id == Number(request.params.id));

    if (!foundItem) {
        return response.status(404).json({ message: "Item not found" });
    }
    return response.status(200).json({ data: foundItem });
});

app.post("/add-items", (request, response) => {
    const obj = {
        id: items.length + 1,
        name: request.body.name,
    };

    items.push(obj);

    return response.status(201).json({ message: "Successfully added new item." });
});

app.delete("/items/:id", (request, response) => {
    const itemId = Number(request.params.id);
    const itemIndex = items.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
        return response.status(404).json({ message: "Item not found" });
    }
    items.splice(itemIndex, 1);
    return response.status(204).json();
});

app.put("/items/:id", (request, response) => {
    const itemId = Number(request.params.id);
    const itemIndex = items.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
        return response.status(404).json({ message: "Item not found" });
    }
    const updatedItem = {
        id: itemId,
        name: request.body.name || items[itemIndex].name,
    };
    items[itemIndex] = updatedItem;

    return response.status(200).json({ data: updatedItem });
});

app.listen(port, () => console.log(`Server running on port ${port}`));