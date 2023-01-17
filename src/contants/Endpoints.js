export const baseUrl = "https://ghuddy.link/api/v1/";

export const apiEndPoint = {
    CREATE_OWNER: "/user/owner/",
    CREATE_CONTRACT: "contract/addinfo/",
    EDIT_CONTRACT: "contract/updateinfo/",
    CREATE_HOTEL_PROPERTY: 'admin/controller/rentalproperty/',
    CREATE_CATEGORY: 'admin/controller/roomcategory/',
    SUBMIT_FOR_REVIEW: 'contract/submit/',
    GET_COUNTRY_DETAILS: 'open/v1/frontendcontentcontroller/fetchallcountry/',
    SIGNUP: "open/firebase/signup/",
    SIGNIN: "open/signin/",
    RENTAL_PROPERTY_IMAGE_UPLOAD: "admin/controller/rentalproperty/images/add",
    CATEGORY_IMAGE_UPLOAD: "admin/rentalproperty/category/images/add",
    FETCH_SUMMERY: "contract/fetchsummary/byuserid/",
    ADMIN_CONTRACT: "admin/contract/",
    
    // create role function
    CREATE_ROLE:'admin/roles',
    FETCH_ROLE:'admin/roles',
    EDIT_ROLE:'admin/roles/',
    DELETE_ROLE:'admin/roles/',
    GET_FUNCTION_TO_ROLE: 'admin/roles/',
    ASSIGN_FUNCTION_ROLE: 'admin/roles/',
    
    CREATE_FUNCTION: "admin/functions",
    FETCH_FUNCTION: "admin/functions",
    EDIT_FUNCTION:'admin/functions/',
    DELETE_FUNCTION:'admin/functions/',


    // owner and admin
    FETCH_OWNER_INFO:"user/review/owner",
    FETCH_CONTRACT_INFO:"user/review/contract-info",
    FETCH_DOCUMENTS_INFO:"user/review/document",
    FETCH_HOTELS_INFO:"user/review/property",
    FETCH_HOTELS_DETAILS:"user/review/property/",
    FETCH_CATEGORYS_INFO:"user/review/category",
    FETCH_CATEGORY_DETAILS:"user/review/category/",

    FETCH_TERMS_AND_CONDITIONS: "open/terms-and-condition/latest",

    FETCH_OWNER_INFO_ADMIN:"admin/review/contract/",
    
    FETCH_CONTRACT_INFO_ADMIN:"admin/review/contract/",
    FETCH_DOCUMENTS_INFO_ADMIN:"admin/review/contract/",
    FETCH_HOTELS_INFO_ADMIN:"admin/review/contract/",
    FETCH_HOTELS_DETAILS_ADMIN:"admin/review/property/",
    FETCH_CATEGORYS_INFO_ADMIN:"admin/review/contract/",
    FETCH_CATEGORY_DETAILS_ADMIN:"admin/review/category/",

};

export const apiForDashboard = {
    CATEGORY_AVAILABILITY: "user/availability/category/",
    HOTEL_CALENDAR_AVAILABILITY: "user/availability/rental-property/",
}

export const apiEndPointForOwnerReviewSubmission = {
    OWNER_REVIEW_SUBMIT: "admin/review/owner/",
    CONTRACT_REVIEW_SUBMIT: "admin/review/contract/",
    DOCUMENT_REVIEW_SUBMIT: "admin/review/contract/",
    HOTEL_REVIEW_SUBMIT: "admin/review/property/",
    CATEGORY_REVIEW_SUBMIT: "admin/review/category/",
}