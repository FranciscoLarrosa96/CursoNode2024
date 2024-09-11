"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
exports.emailTemplate = `
    <div>
        <h1>Hi {{name}}</h1>
        <p>Order id: {{orderId}}</p>
    </div>
`;
//Exporto la constante
module.exports = {
    emailTemplate: exports.emailTemplate
};
