# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Uh, I was reading about Italy, and… when did Mount Vesuvius 
     4.93s  <ret> 발화 (turn1 첫 프레임)
     5.17s  agent 발화 시작: <ret> That’s a common question for anyone visiting that regi
     5.42s  user  발화 끝
     6.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.15s]: Mount Vesuvius last erupted in March 1944.
    14.86s  agent 발화 끝
    16.28s  user  발화 시작: Nineteen forty-four… wow. Was that a big eruption, like Pomp
    21.83s  user  발화 끝
    21.89s  agent 발화 시작: It wasn't on the scale of the seventy-nine eruption that bur
    27.30s  agent 발화 끝
    28.10s  user  발화 시작: Right. So, it's still active then? I mean—
    31.33s  user  발화 끝
    31.43s  agent 발화 시작: It remains an active volcano, and—
    33.83s  user  발화 시작: Is there any way to tell if it’s going to erupt again soon?
    34.56s  agent 발화 끝
    37.53s  user  발화 끝
    37.87s  agent 발화 시작: Monitoring volcanic activity is a complex science, but we ha
    44.03s  <ret> 발화 (turn8 첫 프레임)
    44.19s  agent 발화 시작: <ret> Let me quickly check current volcanic activity reports
    44.31s  agent 발화 끝
    46.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.71s]: (tool result) Mount Vesuvius is currently at yellow alert level. Gas e
    55.33s  agent 발화 끝
