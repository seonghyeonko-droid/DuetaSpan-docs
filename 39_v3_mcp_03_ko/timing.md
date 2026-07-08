# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 저도 집을 알아보고 싶어요. 덴버, 콜로라도에 침실 4개, 욕실 3개, 차고가 있는 집을 찾고 있어요.
     7.55s  agent 발화 시작: <ret> 네, 한번 찾아볼게요. 14 Oak Street에 있는 집은 침실 4개, 욕실 3개, 차고가 있고
     7.55s  <ret> 발화 (turn1 첫 프레임)
     7.55s  user  발화 끝
     8.51s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.01s]: Property ID: 78945, Address: 14 Oak Street, Denver, CO 80202, Bedrooms
    16.62s  user  발화 시작: 음, 그게 제일 저렴한 건가요?
    16.62s  agent 발화 끝
    19.13s  agent 발화 시작: 물론 여러 선택지가 있어요.
    19.13s  user  발화 끝
    21.15s  user  발화 시작: 70만 달러 미만으로 보여줄 수 있어요?
    21.15s  agent 발화 끝
    24.17s  agent 발화 시작: <ret> 네, 다시 검색해 볼게요. 22 Maple Avenue에 있는 집이 65만 달러이고, 원하시는 조
    24.17s  <ret> 발화 (turn5 첫 프레임)
    24.17s  user  발화 끝
    25.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.02s]: Property ID: 12345, Address: 22 Maple Avenue, Denver, CO 80203, Bedroo
    31.22s  user  발화 시작: 흠, 알겠습니다. 근처 학교는 어떤가요?
    31.22s  agent 발화 끝
    33.74s  agent 발화 시작: 이사할 때 고려해야 할 아주 중요한 점이죠.
    33.74s  user  발화 끝
    37.26s  user  발화 시작: 22 Maple Avenue 집 기준으로요.
    37.26s  agent 발화 끝
    39.78s  agent 발화 시작: <ret> 학교 정보를 찾아볼게요. Denver North High School은 0.8마일 거리에 있고 평
    39.78s  <ret> 발화 (turn9 첫 프레임)
    39.78s  user  발화 끝
    40.78s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.52s]: School Name: Denver North High School, Distance: 0.8 miles, Rating: 7/
    49.85s  user  발화 시작: [sigh] 알겠습니다. 토요일 오후에 방문 예약을 할 수 있을까요?
    49.85s  agent 발화 끝
    54.38s  agent 발화 시작: <ret> 네, 예약해 드릴 수 있어요. 토요일 오후 2시에 방문 예약을 했고, 확인 메일을 보내드렸어요.
    54.38s  <ret> 발화 (turn11 첫 프레임)
    54.38s  user  발화 끝
    55.38s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.52s]: Viewing scheduled: Property ID 12345, Saturday at 2:00 PM. Confirmatio
    61.43s  user  발화 시작: 잘 됐네요. 정말 감사합니다.
    61.43s  agent 발화 끝
    63.44s  agent 발화 시작: 도움이 되어 기쁩니다. 이런 결정을 내릴 때 얼마나 많은 계획이 필요한지 정말 흥미롭네요. 마치 장기 기억을
    63.44s  user  발화 끝
    74.02s  agent 발화 끝
