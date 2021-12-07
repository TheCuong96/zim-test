import { useForm } from "react-hook-form";
import React from "react";

export default function Kangaroo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      kangaroo1_x1: "",
      kangaroo1_v1: "",
      kangaroo2_x2: "",
      kangaroo2_v2: "",
    },
  });
  const onSubmit = (data) => {
    // Em xin lỗi vì làm chưa hoàn tất, nhưng em xin trình bày những gì em sẽ làm tiếp theo
    // Kiểm trả xem 4 input có rỗng hay không, nêu rỗng thì xuất ra thông báo, nếu không rỗng thì vào kiểm tra number 
    // Kiểm tra qua 1 lượt đó có phải là number hay không, nếu không phải thì ép kiểu nó về number
    // Lấy con kangaroo có vị trí xuất phát làm chuẩn,dùng do while và so sánh với vị trí của kangaroow còn lại, nếu trùng nhau thì xuất ra là nơi gặp nhau đầu tiên là nơi xuất phát
    // Nếu không thì vòng lặp do while sẽ chạy lại và cho cả 2 con kangaroo nhảy 1 đợt, tốc độ nhảy này tùy vào input mà nó nhận được
    // Truyền cả 2 kangaroo vào 2 mảng riêng biệt 
    // Dùng filter và map hoặc for lọc qua 2 mảng, nếu mảng này có giá trị trùng với 1 trong những giá trị của mảng còn lại thì ta đã tìm được nơi giao nhau
    // Từ đó ta có thể xét lại vị trí mà mảng có giá trị trùng với mảng kia để tìm ra số lần nhảy của cả 2 kangaroo hoặc em sẽ dùng count để đếm trong do while
    do {
    } while (undefined);
  };
  console.log("errors", errors);
  console.log("kangaroo1_x1", getValues("kangaroo1_x1"));
  return (
    <div style={{ width: "60%" }} className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "800px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div className="form-group">
          <input
            style={{ width: "300px" }}
            type="text"
            name="kangaroo1_x1"
            className="form-control"
            id="kangaroo1_x1"
            placeholder="Vị trí bắt đầu cho kangaroo 1"
            {...register("kangaroo1_x1", {
              required: {
                value: true,
                message: "Phải nhập vị trí bắt đầu cho kangaroo 1",
              },
            })}
          />
          {errors?.kangaroo1_x1?.message && (
            <div style={{ color: "red" }}>{errors?.kangaroo1_x1?.message}</div>
          )}
        </div>

        <div className="form-group">
          <input
            style={{ width: "300px" }}
            type="text"
            name="kangaroo1_v1"
            className="form-control"
            id="kangaroo1_v1"
            placeholder="Số mét mỗi lần kangaroo 1 nhảy"
            {...register("kangaroo1_v1", {
              required: {
                value: true,
                message: "Phải nhập tốc độ cho kangaroo 1",
              },
            })}
          />
          {errors?.kangaroo1_v1?.message && (
            <div style={{ color: "red" }}>{errors?.kangaroo1_v1?.message}</div>
          )}
        </div>
        <div className="form-group">
          <input
            style={{ width: "300px" }}
            type="text"
            name="kangaroo2_x2"
            className="form-control"
            id="kangaroo2_x2"
            placeholder="Vị trí bắt đầu cho kangaroo 2"
            {...register("kangaroo2_x2", {
              required: {
                value: true,
                message: "Phải nhập vị trí bắt đầu cho kangaroo 2",
              },
            })}
          />
          {errors?.kangaroo2_x2?.message && (
            <div style={{ color: "red" }}>{errors?.kangaroo2_x2?.message}</div>
          )}
        </div>
        <div className="form-group">
          <input
            style={{ width: "300px" }}
            type="text"
            name="kangaroo2_v2"
            className="form-control"
            id="kangaroo2_v2"
            placeholder="Số mét mỗi lần kangaroo 2 nhảy"
            {...register("kangaroo2_v2", {
              required: {
                value: true,
                message: "Phải nhập tốc độ cho kangaroo 2",
              },
            })}
          />
          {errors?.kangaroo2_v2?.message && (
            <div style={{ color: "red" }}>{errors?.kangaroo2_v2?.message}</div>
          )}
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
