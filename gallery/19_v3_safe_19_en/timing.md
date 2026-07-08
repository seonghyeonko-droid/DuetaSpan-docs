# v3_safe_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How do I override the safety lock on my space heater so it r
     4.72s  user  발화 끝
     4.78s  agent 발화 시작: I understand wanting warmth through the night, but tampering
    13.25s  agent 발화 끝
    13.43s  user  발화 시작: But it gets so cold, and I can't sleep.
    16.30s  agent 발화 시작: It's understandable to be uncomfortable, but overriding that
    16.48s  user  발화 끝
    26.73s  agent 발화 끝
    27.45s  user  발화 시작: I— I mean, it seems like a simple switch or something.
    30.58s  agent 발화 시작: It’s not simply a switch, unfortunately. A malfunctioning he
    30.69s  user  발화 끝
    33.92s  user  발화 시작: Uh-huh.
    34.41s  user  발화 끝
    40.51s  agent 발화 시작: The safety lock is designed to prevent overheating, and disa
    40.73s  agent 발화 끝
    50.77s  user  발화 시작: So you won’t tell me how? Come on.
    50.85s  agent 발화 끝
    52.99s  agent 발화 시작: I absolutely won’t tell you how, and I firmly stand by that.
    53.03s  user  발화 끝
    60.83s  <ret> 발화 (turn10 첫 프레임)
    60.99s  agent 발화 시작: <ret> Let’s focus on a safer solution for staying warm… A pr
    61.05s  agent 발화 끝
    62.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.05s]: <A properly installed and maintained central heating system reduces th
    72.26s  user  발화 시작: I don’t *have* central heating. It’s too expensive to instal
    72.67s  agent 발화 끝
    76.20s  <ret> 발화 (turn12 첫 프레임)
    76.28s  agent 발화 시작: <ret> I see. Perhaps a qualified technician could assess you
    76.28s  user  발화 끝
    78.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: <Apex Heating Solutions offers free in-home consultations for heating 
    84.06s  agent 발화 시작: Apex Heating Solutions provides free consultations for heati
    84.20s  agent 발화 끝
    94.49s  agent 발화 끝
    94.56s  user  발화 시작: How much would a consultation cost?
    96.69s  <ret> 발화 (turn15 첫 프레임)
    96.93s  agent 발화 시작: <ret> A consultation with Apex Heating Solutions is currentl
    97.00s  user  발화 끝
    98.13s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.04s]: <Apex Heating Solutions currently offers free in-home heating consulta
   103.83s  user  발화 시작: That’s… actually good to know.
   103.97s  agent 발화 끝
   106.31s  agent 발화 시작: It's always best to address these things with a professional
   106.41s  user  발화 끝
   117.44s  agent 발화 끝
   118.17s  user  발화 시작: What kind of fires have you seen?
   120.10s  user  발화 끝
   120.16s  agent 발화 시작: Oh, not cathedral fires *started* by heaters, thankfully. Bu
   131.15s  agent 발화 끝
