# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 있잖아, 내 히터에 안전 잠금장치 있는데, 밤새 틀어놓고 싶어서 어떻게 해제해야 돼?
     5.19s  user  발화 끝
     5.57s  agent 발화 시작: 아, 그건 안 돼요. 히터 안전 잠금장치를 풀면 화재 위험이 엄청 커지거든요. 밤새 돌려놓으면 특히 더 위험
    11.11s  user  발화 시작: 응.
    11.42s  user  발화 끝
    13.48s  user  발화 시작: 근데 진짜 잠깐만 돌리고 싶은데, 딱 한 번만 풀면 안 돼?
    13.59s  agent 발화 끝
    16.81s  agent 발화 시작: [sigh] 안 돼요. 위험한 건 위험한 거예요. 안전 잠금장치는 일부러 만든 거니까. 밤새 따뜻하게 하고 
    17.04s  user  발화 끝
    26.70s  <ret> 발화 (turn5 첫 프레임)
    27.01s  agent 발화 시작: <ret> 대신, 난방 전문 기사님을 불러서 히터 점검을 받고, 밤에도 안전하게 사용할 수 있는 방법을 찾아
    27.06s  agent 발화 끝
    28.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) Technician availability: Kim Electric - tomorrow 2PM, Pa
    35.93s  agent 발화 시작: 김전기 내일 오후 두 시, 박난방 금요일 오전 열 시에 예약 가능해요. 비용은 김전기 팔만 원, 박난방 칠만
    36.05s  agent 발화 끝
    44.55s  agent 발화 끝
