// let color = "#3aa757";

const storage = {};

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log("Default background color set to %cgreen", `color: ${color}`);
// });

// Where we will expose all the data we retrieve from storage.sync.
// const storageCache = {};
// // Asynchronously retrieve data from storage.sync, then cache it.
// const initStorageCache = getAllStorageSyncData().then(items => {
//   // Copy the data retrieved from storage into storageCache.
//   Object.assign(storageCache, items);
// });

// chrome.action.onClicked.addListener(async (tab) => {
//   try {
//     await initStorageCache;
//   } catch (e) {
//     // Handle error that occurred during storage initialization.
//   }
//   // Normal action handler logic.
// });

// // Reads all data out of storage.sync and exposes it via a promise.
// //
// // Note: Once the Storage API gains promise support, this function
// // can be greatly simplified.
// function getAllStorageSyncData() {
//   // Immediately return a promise and start asynchronous work
//   return new Promise((resolve, reject) => {
//     // Asynchronously fetch all data from storage.sync.
//     chrome.storage.sync.get(null, (items) => {
//       // Pass any observed errors down the promise chain.
//       if (chrome.runtime.lastError) {
//         return reject(chrome.runtime.lastError);
//       }
//       // Pass the data retrieved from storage down the promise chain.
//       resolve(items);
//     });
//   });
// }

// chrome.storage.sync.set({ userURL: null }, function () {
//   if (chrome.storage.sync.get["userURL"] === null) {
//     const customURL = prompt("Please type in the custom URL: ");
//     chrome.storage.sync.set({ userURL: customURL }, function () {});
//   }
// });

// chrome.storage.sync.set({ userURL: null }, function () {
//   if (chrome.storage.sync.get["userURL"] === null) {
//     const customURL = prompt("Please type in the custom URL: ");
//     chrome.storage.sync.set({ userURL: customURL }, function () {});
//   }
// });
