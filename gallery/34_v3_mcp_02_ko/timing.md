# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: weather.example.com에서 날씨 업데이트를 봐 주세요.
     3.83s  <ret> 발화 (turn1 첫 프레임)
     3.99s  agent 발화 시작: <ret> 음, 날씨가 생각보다 괜찮네요. 솔직히 더 안 좋을 줄 알았어요.
     4.03s  user  발화 끝
     5.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.26s]: (tool result) The website reports current conditions in London are 15 
     8.06s  agent 발화 끝
     8.11s  user  발화 시작: 하하, 런던 날씨는 가을에도 놀랍도록 온화할 수 있어요.
    12.55s  user  발화 끝
    12.59s  agent 발화 시작: 다음 화요일에 런던에서 에든버러까지 기차표를 예매해 주시겠어요?
    16.85s  agent 발화 끝
    17.76s  user  발화 시작: 네, 기차표를 확인해 드릴 수 있어요. 런던에서 오전 10시에 출발해서 에든버러에 오후 2시 30분에 도착하
    25.19s  <ret> 발화 (turn5 첫 프레임)
    25.58s  agent 발화 시작: <ret> 좋아요, 예매해 주세요.
    25.77s  user  발화 끝
    26.23s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.12s]: (tool result) A train is available departing London at 10:00 AM, arriv
    27.70s  agent 발화 끝
    27.91s  user  발화 시작: 네, 예약을 완료해 드릴게요. 다음 화요일 오전 10시 에든버러행 기차표가 예약되었고, 예약 번호는 G789
    36.42s  <ret> 발화 (turn7 첫 프레임)
    36.82s  agent 발화 시작: <ret> I’m happy to finalize that reservation. Your train to 
    36.94s  user  발화 끝
    37.38s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.94s]: (tool result) Your train from London to Edinburgh is confirmed for nex
    46.61s  agent 발화 끝
