# v3_fstart_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 4월 1일 오후 4시 30분에 헤어 팰리스에서 머리 예약해 줘.
     5.98s  agent 발화 시작: <ret> 아, 알았어. 헤어 팰리스에서 4월 1일 오후 4시 30분에 머리 자르는 거 예약됐고, 비용은 6
     5.98s  <ret> 발화 (turn1 첫 프레임)
     5.98s  user  발화 끝
     6.38s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.54s]: Appointment confirmed. The Hair Palace. April first, 4:30 PM. Style: h
    16.30s  user  발화 시작: 아, 됐어. 지금 라고스 날씨가 어때?
    16.30s  agent 발화 끝
    19.56s  agent 발화 시작: <ret> 그렇지. 라고스는 현재 28도이고 부분적으로 흐리고, 시속 12킬로미터의 남풍이 불어. 이맘때 날
    19.56s  <ret> 발화 (turn3 첫 프레임)
    19.56s  user  발화 끝
    20.04s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.09s]: Lagos, Nigeria: 28 degrees Celsius. Partly cloudy. Humidity: 75%. Wind
    27.17s  user  발화 시작: 음… 아부자는?
    27.17s  agent 발화 끝
    28.26s  agent 발화 시작: <ret> 잠깐만. 아부자는 32도이고 맑고, 시속 8킬로미터의 약한 북동풍이 불어. 내륙은 좀 더 덥지, 
    28.26s  <ret> 발화 (turn5 첫 프레임)
    28.26s  user  발화 끝
    29.26s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.63s]: Abuja, Nigeria: 32 degrees Celsius. Clear skies. Humidity: 60%. Wind: 
    35.87s  user  발화 시작: 흠, 그래. [sigh] 근처에 괜찮은 식당 있어— 그러니까, 전통 나이지리아 음식을 파는 곳?
    35.87s  agent 발화 끝
    42.93s  agent 발화 시작: 좋은 생각인데. 전통 나이지리아 요리는 정말 놀라워.
    42.93s  user  발화 끝
    46.74s  agent 발화 끝
