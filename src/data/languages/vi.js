const vi = {

  questions: {

    q1: {
      id:"q1",
      type:"single",
      q:"Bạn đã sử dụng Intent trong bao lâu?",
      options:[
        "Ít hơn 7 ngày",
        "7-30 ngày",
        "Hơn 30 ngày"
      ],
      next:"q2",
      hasOther:false
    },


    q2:{
      id:"q2",
      type:"multiple",
      q:"Tính năng nào của Intent hữu ích nhất với bạn?",
      hint:"Có thể chọn nhiều đáp án",
      options:[
        "Dịch theo thời gian thực",
        "Sao chép giọng nói bằng AI",
        "Dịch trực tiếp mặt đối mặt",
        "Kết bạn với người nước ngoài",
        "Khác"
      ],
      next:"q3",
      hasOther:true
    },


    q3:{
      id:"q3",
      type:"single",
      q:"Bạn sử dụng Intent thường xuyên như thế nào?",
      options:[
        "Sử dụng mỗi ngày",
        "Đã sử dụng vài lần",
        "Hầu như chưa mở"
      ],
      next:"q4",
      hasOther:false
    },


    q4:{
      id:"q4",
      type:"single",
      q:"Trải nghiệm sử dụng Intent của bạn như thế nào?",
      options:[
        "Rất tốt, tôi sẽ tiếp tục sử dụng",
        "Bình thường",
        "Không tốt lắm"
      ],
      next:{
        "Rất tốt, tôi sẽ tiếp tục sử dụng":"q4_good",
        "Bình thường":"q4_bad",
        "Không tốt lắm":"q4_bad"
      },
      hasOther:false
    },


    q4_good:{
      id:"q4_good",
      type:"multiple",
      q:"Điều gì khiến bạn hài lòng?",
      hint:"Có thể chọn nhiều đáp án",
      options:[
        "Dịch chính xác",
        "Dễ sử dụng",
        "Tính năng đầy đủ",
        "Khác"
      ],
      next:"end",
      hasOther:true
    },


    q4_bad:{
      id:"q4_bad",
      type:"multiple",
      q:"Có tính năng nào không giống với kỳ vọng của bạn không?",
      hint:"Có thể chọn nhiều đáp án",
      options:[
        "Chất lượng dịch chưa đạt kỳ vọng",
        "Không tìm thấy tính năng mong muốn",
        "Thao tác phức tạp hơn tưởng tượng",
        "Khác"
      ],
      next:"end",
      hasOther:true
    }

  },


  otherTitle:"Hãy cho chúng tôi biết thêm",

  placeholder:"Nhập câu trả lời của bạn...",

  continue:"Tiếp tục",

  submit:"Gửi",

  thankTitle:"Cảm ơn bạn đã tham gia!",

  thankText:"Phản hồi của bạn giúp chúng tôi cải thiện Intent."

}


export default vi