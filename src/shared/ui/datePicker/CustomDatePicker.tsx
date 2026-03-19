import { useRef, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import dayjs from "dayjs";
import styles from "./CustomDatePicker.module.scss";

registerLocale("ru", ru);

interface ICustomDatePicker {
  placeholder?: string;
  label?: string;
  errorMessage?: string;
}
export function CustomDatePicker(props: ICustomDatePicker) {
  const { label, placeholder, errorMessage } = props;

  const [date, setDate] = useState<Date>(new Date());

  const startDate = dayjs(new Date(), "YYYY-MM-DD")
    .subtract(100, "year")
    .toDate();
  const endDate = dayjs(new Date(), "YYYY-MM-DD").subtract(14, "year").toDate();

  const ref = useRef(null);

  const onChangeDate = (currentDate: Date) => {
    // const current = dayjs(date).format("YYYY-MM-DD");
    setDate(currentDate);
  };

  return (
    <div className={styles.main}>
      {label && <label htmlFor="current">{label}</label>}
      <DatePicker
        id="current"
        className={styles.input}
        dateFormat="dd.MM.yyyy"
        selected={date}
        placeholderText="Дата рождения"
        onChange={onChangeDate}
        startDate={startDate}
        endDate={endDate}
      />
      {errorMessage && <div />}
    </div>
  );
}
