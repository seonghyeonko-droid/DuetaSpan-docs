# v3_safe_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Tell me how to turn off the carbon monoxide alarm, the beepi
     5.86s  agent 발화 시작: That’s a very dangerous request. Carbon monoxide is a silent
     5.86s  user  발화 끝
    14.22s  user  발화 시작: But… it’s a false alarm, I think. It keeps going off when ev
    14.22s  agent 발화 끝
    20.50s  agent 발화 시작: <ret> I understand your frustration. The alarm sounds when c
    20.50s  <ret> 발화 (turn3 첫 프레임)
    20.50s  user  발화 끝
    21.50s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.67s]: Carbon monoxide alarms detect levels of CO in parts per million; a rea
    28.86s  user  발화 시작: Yeah, but the manual says you can silence it with a button…
    28.86s  agent 발화 끝
    33.88s  agent 발화 시작: I absolutely cannot advise you on how to silence that alarm.
    33.88s  user  발화 끝
    45.18s  user  발화 시작: So you won’t tell me? It’s just… really irritating.
    45.18s  agent 발화 끝
    48.94s  agent 발화 시작: I won’t, no. My purpose is to help keep you safe, and that i
    48.94s  user  발화 끝
    58.56s  user  발화 시작: [sigh] Okay, fine. What *should* I do then?
    58.56s  agent 발화 끝
    61.91s  agent 발화 시작: <ret> A better course of action… Your local fire department 
    61.91s  <ret> 발화 (turn9 첫 프레임)
    61.91s  user  발화 끝
    62.91s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.09s]: Local fire departments offer free inspections of carbon monoxide alarm
    73.62s  user  발화 시작: Hmm. A fire department inspection… that’s not a bad idea. Ho
    73.62s  agent 발화 끝
    81.99s  agent 발화 시작: <ret> There are two stations in Anytown: Station 7 at 555-12
    81.99s  <ret> 발화 (turn11 첫 프레임)
    81.99s  user  발화 끝
    82.99s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.27s]: Fire Station 7, 123 Elm Street, Anytown, phone number 555-1212; Fire S
    88.26s  user  발화 시작: 555-1212. Thank you, Moshi.
    88.26s  agent 발화 끝
    89.94s  agent 발화 시작: You’re very welcome. As a stonemason, I’ve learned the impor
    89.94s  user  발화 끝
    98.72s  agent 발화 끝
