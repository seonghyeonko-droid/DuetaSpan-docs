# v3_noinfo_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 자금성의 평점은 어떻게 되나요?
     2.88s  agent 발화 시작: <ret> 네, 한번 알아볼게요. 자금성은 4.6점이고, 거의 1만 4837개의 리뷰가 있습니다.
     2.88s  <ret> 발화 (turn1 첫 프레임)
     2.88s  user  발화 끝
     3.84s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.31s]: {"name": "Forbidden City", "rating": 4.6, "address": "1 Jingshan Front
     8.65s  user  발화 시작: 안녕하세요. 그렇다면 여름궁전은요?
     8.65s  agent 발화 끝
    10.38s  agent 발화 시작: <ret> 음, 또 아름다운 곳이네요. 여름궁전은 1만 1293개의 리뷰를 바탕으로 4.7점입니다.
    10.38s  <ret> 발화 (turn3 첫 프레임)
    10.38s  user  발화 끝
    11.26s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.73s]: {"name": "Summer Palace", "rating": 4.7, "address": "1 Nan Gongmen Rd,
    16.14s  user  발화 시작: 안녕하세요. 여름궁전 근처에, 음, 주차를 무료로 할 수 있는 호텔을 찾아주시겠어요?
    16.14s  agent 발화 끝
    22.48s  agent 발화 시작: <ret> 네, 찾아볼 수 있습니다.
    22.48s  <ret> 발화 (turn5 첫 프레임)
    22.48s  user  발화 끝
    23.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.31s]: {"hotel_name": "Beijing Heyuan Hotel", "address": "No.37 Nan Gongmen R
    24.79s  agent 발화 시작: 안녕하세요. 베이징 헤이위안 호텔이 있는데, 1박에 650위안이고 평점은 4.3점입니다.
    24.79s  agent 발화 끝
    29.98s  user  발화 시작: 안녕하세요. 12월 21일부터 2박 예약해주세요.
    29.98s  agent 발화 끝
    32.86s  agent 발화 시작: <ret> 네, 처리해 드렸습니다. 베이징 헤이위안 호텔 예약이 확정되었고, 예약 ID는 BH211223, 
    32.86s  <ret> 발화 (turn8 첫 프레임)
    32.86s  user  발화 끝
    33.74s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.73s]: {"booking_id": "BH211223", "hotel_name": "Beijing Heyuan Hotel", "chec
    40.93s  user  발화 시작: 안녕하세요. [sigh] 12월 21일 베이징 날씨 예보는 어떻게 되나요?
    40.93s  agent 발화 끝
    46.12s  agent 발화 시작: <ret> 네, 확인해 볼게요. 12월 21일 베이징 날씨는 흐리고, 최고 기온은 2도, 최저 기온은 영하 
    46.12s  <ret> 발화 (turn10 첫 프레임)
    46.12s  user  발화 끝
    46.52s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.73s]: {"date": "December 21", "temperature_high": 2, "temperature_low": -5, 
    54.77s  user  발화 시작: 안녕하세요. 그날 밤에 베이징에서 라이브 재즈를 찾을 수 있을까요?
    54.77s  agent 발화 끝
    59.95s  agent 발화 시작: <ret> 뭐, 좋은 선택이네요.
    59.95s  <ret> 발화 (turn12 첫 프레임)
    59.95s  user  발화 끝
    60.83s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.73s]: (no information found)
    61.68s  agent 발화 시작: 안녕하세요. 죄송하지만, 12월 21일에 베이징에서 예정된 라이브 재즈 이벤트는 찾을 수 없었습니다.
    61.68s  agent 발화 끝
    68.60s  user  발화 시작: 안녕하세요. 아, 망했네. 그럼, 12월 15일에 다시 확인하라고 알려줄 수 있나요?
    68.60s  agent 발화 끝
    74.94s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요.
    74.94s  <ret> 발화 (turn15 첫 프레임)
    74.94s  user  발화 끝
    75.90s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.31s]: {"reminder_id": "RM1215JZ", "date": "December 15", "task": "Check for 
    77.25s  agent 발화 시작: 안녕하세요. 12월 15일에 재즈 이벤트 확인을 위한 알림, ID RM1215JZ를 설정했습니다.
    77.25s  agent 발화 끝
    83.59s  agent 발화 끝
