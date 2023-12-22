"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfile = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.createProfile = functions.auth.user().onCreate((user) => {
    const newUserProfile = {
        avatar: "",
        email: user.email,
        username: user.displayName,
        isSubscribed: false,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    return admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(newUserProfile);
});
//# sourceMappingURL=index.js.map