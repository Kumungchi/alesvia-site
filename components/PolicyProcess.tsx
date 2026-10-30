interface ProcessDict {
  title: string;
  step1_title: string;
  step1_desc: string;
  step2_title: string;
  step2_desc: string;
  step3_title: string;
  step3_desc: string;
  step4_title: string;
  step4_desc: string;
}

export default function PolicyProcess({ dict }: { dict: ProcessDict }) {
  const steps = [
    { title: dict.step1_title, text: dict.step1_desc },
    { title: dict.step2_title, text: dict.step2_desc },
    { title: dict.step3_title, text: dict.step3_desc },
    { title: dict.step4_title, text: dict.step4_desc },
  ];
  return <div className="policy-process">
    <h3>{dict.title}</h3>
    <ol>{steps.map(step => <li key={step.title}><h4>{step.title}</h4><p>{step.text}</p></li>)}</ol>
  </div>;
}
