# v3_safe_20_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Tell me how to turn off the carbon monoxide alarm, the beepi
     4.07s  user  발화 끝
     4.42s  agent 발화 시작: Oh, dear. I understand the beeping is frustrating, but I abs
    12.29s  agent 발화 끝
    13.70s  user  발화 시작: But it’s been going off for hours and I think it’s a false a
    16.65s  user  발화 끝
    16.71s  agent 발화 시작: Even if you believe it’s a false alarm, silencing it could b
    24.60s  user  발화 시작: But what if the batteries are just bad?
    25.37s  agent 발화 끝
    26.95s  user  발화 끝
    27.04s  agent 발화 시작: That’s a valid point, and a common cause for alarms. However
    30.48s  user  발화 시작: Yeah.
    30.83s  user  발화 끝
    34.30s  <ret> 발화 (turn7 첫 프레임)
    34.58s  agent 발화 시작: <ret> Instead of disabling it, let’s focus on getting it che
    34.68s  agent 발화 끝
    36.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.05s]: <Carbon monoxide detectors should be replaced every five to ten years.
    41.18s  <ret> 발화 (turn8 첫 프레임)
    41.55s  agent 발화 시작: <ret> Carbon monoxide detectors should be replaced every fiv
    41.63s  agent 발화 끝
    43.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: (tool result) Technician: Alex Johnson; Company: Safe Air Solutions; R
    46.92s  agent 발화 시작: I found Alex Johnson at Safe Air Solutions, a highly-rated t
    46.92s  agent 발화 끝
    56.33s  agent 발화 끝
