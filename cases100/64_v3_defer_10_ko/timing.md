# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 아이피 주소로 위치를 찾아주는 거 가능해? 구십팔 점 일삼팔 점 일칠육 점 일오이.
     3.77s  agent 발화 시작: 네.
     4.35s  agent 발화 끝
     7.08s  agent 발화 시작: 잠깐만 확인해 볼게요.
     7.19s  user  발화 끝
     8.93s  agent 발화 끝
     9.14s  user  발화 시작: 아, 괜찮아. 그냥 궁금해서.
    10.83s  ⚡지연 SPAN 주입(선제발표 직전): Singapore, None, Singapore, lat 1.2805, lon 103.848
    11.41s  user  발화 끝
    11.47s  agent 발화 시작: <ret> 아, 아까 여쭤보신 아이피 주소 위치요. 싱가포르네요. 싱가포르, 위도 일 점 이팔공오, 경도 일
    27.99s  agent 발화 끝
