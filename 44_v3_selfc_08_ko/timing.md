# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 에러 메시지 데이터 URI로 스크린샷 찍어 줄 수 있어?
     1.76s  <ret> 발화 (turn1 첫 프레임)
     2.24s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.61s]: (tool result) Screenshot saved as a data URI: data:image/png;base64,iV
     2.35s  agent 발화 시작: <ret> 음, 데이터 URI로 인코딩된 base64 형식의 에러 메시지 스크린샷이 있어.
     2.50s  user  발화 끝
     8.46s  agent 발화 끝
     9.93s  user  발화 시작: 아, 너무 작네… 풀 페이지 스크린샷으로 찍어 줄 수 있어?
    14.19s  <ret> 발화 (turn3 첫 프레임)
    14.79s  user  발화 끝
    14.79s  agent 발화 시작: <ret> 당연하지. 에러의 풀 페이지 스크린샷을 찍었어.
    15.19s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.08s]: (tool result) Full-page screenshot saved as a data URI: data:image/png
    18.02s  agent 발화 끝
