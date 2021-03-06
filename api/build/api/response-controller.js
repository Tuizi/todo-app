"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withResponseController = (requestToControl) => async (req, res, next) => {
    try {
        const response = await requestToControl(req, res, next);
        return res.status(200).json({ data: response });
    }
    catch (err) {
        console.error(err);
        // TODO: if production, don't return the real message
        return res.status(500).json({
            errors: [err.message]
        });
    }
};
exports.default = withResponseController;
