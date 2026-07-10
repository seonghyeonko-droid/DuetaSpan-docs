# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "서완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 오늘 날씨가 어때요? | S2 아, 그렇군요. 혹시 영화 예매도 할 수 있어요? | S3 오, 다섯시로 예매하고 싶은데, 어떻게 해야 하죠? | S4 서울 재즈 페스티벌… 재밌겠네요. 그럼, 혹시 제가 지난달에 

     0.00s  user  발화 시작: 안녕하세요, 오늘 날씨가 어때요?
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.27s  agent 발화 시작: <ret> 안녕하세요. 지금 기온은 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다. 날
     3.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     3.38s  user  발화 끝
    10.97s  agent 발화 끝
    10.97s  user  발화 시작: 아, 그렇군요. 마하라슈트라 주 총리는 누구예요?
    15.33s  <ret> 발화 (turn3 첫 프레임)
    15.49s  agent 발화 시작: <ret> 마하라슈트라 주 총리는 데벤드라 파드나비스 님입니다. 이천십사년 십일월 구일에 취임하셨습니다.
    15.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: Devendra Fadnavis is the current Chief Minister of Maharashtra, having
    15.60s  user  발화 끝
    22.12s  agent 발화 끝
    22.94s  user  발화 시작: 음… 파드나비스 님… 혹시 그분 고향이 어디예요?
    28.11s  <ret> 발화 (turn5 첫 프레임)
    28.34s  agent 발화 시작: <ret> 죄송하지만, 데벤드라 파드나비스 님의 고향에 대한 정보는 찾을 수 없었습니다.
    28.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: (no information found)
    28.55s  user  발화 끝
    33.39s  agent 발화 끝
    33.48s  user  발화 시작: 아, 그렇군요. 혹시 영화 예매도 할 수 있어요?
    37.07s  <ret> 발화 (turn7 첫 프레임)
    37.30s  agent 발화 시작: <ret> 네, 영화 예매도 가능합니다. 현재 상영 중인 영화는 오펜하이머, 바비, 미션 임파서블: 데드 레
    37.31s  ⚡SPAN 주입 [d'=1.04s / d_lead=7.32s]: (tool result) Oppenheimer, Barbie, Mission: Impossible - Dead Reckonin
    37.45s  user  발화 끝
    44.45s  user  발화 시작: 바비 영화 시간 좀 알려주시겠어요?
    44.62s  agent 발화 끝
    46.92s  <ret> 발화 (turn9 첫 프레임)
    46.99s  agent 발화 시작: <ret> 바비 영화 상영 시간은 오후 두시, 다섯시, 여덟시입니다.
    47.00s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.61s]: (tool result) 14:00, 17:00, 20:00
    47.17s  user  발화 끝
    48.56s  user  발화 시작: 어머.
    49.38s  user  발화 끝
    50.58s  user  발화 시작: 오, 다섯시로 예매하고 싶은데, 어떻게 해야 하죠?
    50.60s  agent 발화 끝
    53.73s  <ret> 발화 (turn12 첫 프레임)
    54.04s  agent 발화 시작: <ret> 바비 영화 다섯시 상영, 두석 예매 완료되었습니다. 확인 번호는 팔 구 칠 육 오 사입니다.
    54.05s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.79s]: (tool result) Barbie, 17:00, 2 seats confirmed, ID: 897654
    54.09s  user  발화 끝
    59.42s  user  발화 시작: 와, 정말 빠르네요! 혹시… 친구랑 영화 보러 가는데, 친구에게 위치 좀 공유해 줄 수 있을까요?
    59.83s  agent 발화 끝
    67.12s  <ret> 발화 (turn14 첫 프레임)
    67.48s  user  발화 끝
    67.53s  agent 발화 시작: <ret> 네, 친구분께 현재 위치를 공유했습니다.
    67.53s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.77s]: (tool result) Location shared with your contact.
    70.29s  agent 발화 끝
    70.31s  user  발화 시작: 고마워요, 정말 편리하네요. 아, 그런데 혹시 이번 주 토요일에 특별한 이벤트 있어요?
    76.51s  <ret> 발화 (turn16 첫 프레임)
    76.75s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십삼일에는 서울 재즈 페스티벌이 열립니다.
    76.75s  ⚡SPAN 주입 [d'=0.56s / d_lead=4.12s]: (tool result) Seoul Jazz Festival, July 13, 2026
    76.93s  user  발화 끝
    78.99s  user  발화 시작: 예.
    79.63s  user  발화 끝
    80.69s  user  발화 시작: 서울 재즈 페스티벌… 재밌겠네요. 그럼, 혹시 제가 지난달에 친구에게 보낸 메시지는 기억하시나요?
    80.87s  agent 발화 끝
    88.60s  <ret> 발화 (turn19 첫 프레임)
    88.75s  agent 발화 시작: <ret> 이천이십육년 칠월 삼일에 친구에게 서울 재즈 페스티벌에 같이 가자고 메시지를 보내셨습니다.
    88.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: [2026-07-03] 친구에게 서울 재즈 페스티벌 같이 가자고 메시지 보냈다.
    88.85s  user  발화 끝
    92.30s  user  발화 시작: 진짜요?
    93.12s  user  발화 끝
    94.61s  user  발화 시작: 아, 맞아요! 기억해 주셔서 고마워요. 그럼, 저는 이만 가볼게요.
    94.72s  agent 발화 끝
   101.05s  user  발화 끝
   101.45s  agent 발화 시작: 네, 좋은 하루 보내세요.
   102.83s  agent 발화 끝
