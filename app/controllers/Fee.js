const listFee={
  "code": 0,
  "message": "Success",
  "totalRow": 6,
  "lstFee": [
      {
          "id": 1,
          "code": "1",
          "systemCodeId": 123,
          "enRemark": "FEE01",
          "viRemark": "PHI01",
          "accountId": "123124",
          "type": 1,
          "applyDate": "15/10/2021 11:17:03",
          "status": 1
      },
      {
          "id": 2,
          "code": "2",
          "systemCodeId": 31231,
          "enRemark": "FEE02",
          "viRemark": "PHI02",
          "accountId": "1231234",
          "type": 2,
          "applyDate": "08/10/2021 11:19:51",
          "status": 1
      },
      {
          "id": 3,
          "code": "3",
          "systemCodeId": 2222,
          "enRemark": "FEE03",
          "viRemark": "PHI03",
          "accountId": "124123",
          "type": 3,
          "applyDate": "16/10/2021 11:21:14",
          "status": 4
      },
      {
          "id": 4,
          "code": "4",
          "systemCodeId": 1456543,
          "enRemark": "FEE04",
          "viRemark": "PHI04",
          "accountId": "5123123",
          "type": 4,
          "applyDate": "16/10/2021 20:23:39",
          "status": 4
      },
      {
          "id": 5,
          "code": "5",
          "systemCodeId": 124312,
          "enRemark": "FEE05",
          "viRemark": "PHI05",
          "accountId": "12412",
          "type": 5,
          "applyDate": "16/10/2021 20:24:32",
          "status": 2
      },
      {
          "id": 6,
          "code": "6",
          "systemCodeId": 1213123,
          "enRemark": "FEE06",
          "viRemark": "PHI06",
          "accountId": "1294124",
          "type": 6,
          "applyDate": "16/10/2021 20:27:02",
          "status": 2
      }
  ]
}
module.exports = {
  getListFee: (req,res,next) => {
    return res.status(200).send(listFee);
  }
}