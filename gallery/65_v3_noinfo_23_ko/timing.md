# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "보온",
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
#       "date": "2026-06-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-15",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 엄마 친구분 연락처 좀 알려줄 수 있어? | S2 인터스텔라 시간 좀 알려줘. | S3 …영화관 말고 집에서 볼 수 있는 곳은 어디야? | S4 혹시 주말에 비 올까?

     0.00s  user  발화 시작: 엄마 친구분 연락처 좀 알려줄 수 있어?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.01s  <ret> 발화 (turn5 첫 프레임)
     0.04s  agent 발화 시작: <ret> 죄송해요. 개인 정보 보호 때문에 다른 분의 연락처는 찾아드릴 수 없어요.
     0.04s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (no information found)
     0.04s  user  발화 끝
     0.10s  user  발화 시작: 아, 그렇구나. 그럼 서울 날씨는 어때?
     0.10s  agent 발화 끝
     0.13s  agent 발화 시작: <ret> 지금 서울은 기온이 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터로 불고 있어
     0.13s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     0.13s  user  발화 끝
     0.20s  <ret> 발화 (turn7 첫 프레임)
     0.20s  user  발화 시작: 이번 주 토요일에 영화 볼 만한 거 있어?
     0.20s  agent 발화 끝
     0.25s  agent 발화 시작: <ret> 이번 주 토요일에는 '인터스텔라', '어벤져스: 엔드게임', '기생충' 같은 영화들이 상영되고 있
     0.25s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) '인터스텔라', '어벤져스: 엔드게임', '기생충' 등 다양한 영화가 상영 중입니다. CGV 홈페이지
     0.25s  user  발화 끝
     0.25s  <ret> 발화 (turn12 첫 프레임)
     0.34s  user  발화 시작: 인터스텔라 시간 좀 알려줘.
     0.34s  agent 발화 끝
     0.36s  agent 발화 시작: <ret> '인터스텔라'는 오후 두시, 다섯시, 여덟시에 상영되고 있어요.
     0.36s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) 14:00, 17:00, 20:00
     0.36s  user  발화 끝
     0.40s  user  발화 시작: 어머.
     0.40s  agent 발화 끝
     0.41s  user  발화 시작: 혹시…
     0.41s  user  발화 끝
     0.41s  agent 발화 시작: 제가 알아본 바로는, '인터스텔라'는 과학적 사실에 기반한—
     0.41s  user  발화 끝
     0.45s  user  발화 시작: …영화관 말고 집에서 볼 수 있는 곳은 어디야?
     0.45s  agent 발화 끝
     0.48s  <ret> 발화 (turn24 첫 프레임)
     0.49s  agent 발화 시작: <ret> 그럼 OTT 서비스를 확인해 보는 건 어떠세요?
     0.49s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) '인터스텔라'는 넷플릭스, 웨이브, 티빙에서 시청 가능합니다.
     0.49s  user  발화 끝
     0.53s  <ret> 발화 (turn18 첫 프레임)
     0.53s  agent 발화 시작: '인터스텔라'는 넷플릭스, 웨이브, 티빙에서 시청할 수 있어요.
     0.53s  agent 발화 끝
     0.57s  user  발화 시작: 네.
     0.57s  agent 발화 끝
     0.58s  agent 발화 시작: 영화를 고르는 데 도움이 되셨다니 다행이에요. 혹시 다른 영화도 찾아드릴까요?
     0.58s  user  발화 끝
     0.61s  <ret> 발화 (turn21 첫 프레임)
     0.63s  user  발화 시작: 예.
     0.63s  agent 발화 끝
     0.64s  user  발화 시작: 아니, 괜찮아. 이번 주말에 갈 만한 곳 추천해 줘.
     0.64s  user  발화 끝
     0.69s  agent 발화 시작: <ret> 이번 주말에 가기 좋은 곳으로는 남산타워, 경복궁, 롯데월드, 인사동 등이 있어요.
     0.69s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) 남산타워, 경복궁, 롯데월드, 인사동 등이 있습니다.
     0.69s  user  발화 끝
     0.75s  user  발화 시작: 네네.
     0.75s  agent 발화 끝
     0.75s  user  발화 시작: 경복궁 가려면 어떻게 가?
     0.75s  user  발화 끝
     0.77s  agent 발화 시작: <ret> 현재 위치에서 경복궁까지 대중교통으로 삼십분 정도 걸리고, 지하철 삼호선 경복궁역 오번 출구로 나
     0.77s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) 현재 위치에서 경복궁까지 대중교통으로 30분 소요됩니다. 지하철 3호선 경복궁역 5번 출구로 나오시면
     0.77s  user  발화 끝
     0.85s  user  발화 시작: 음.
     0.85s  agent 발화 끝
     0.86s  user  발화 시작: 혹시 주말에 비 올까?
     0.86s  user  발화 끝
     0.88s  agent 발화 시작: <ret> 토요일 서울 날씨는 기온이 이십오도이고, 습도는 육십팔퍼센트, 비 올 확률은 삼십퍼센트 정도예요.
     0.88s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 25.0°C, humidity 68%, chance of rain 30%
     0.88s  user  발화 끝
     0.95s  user  발화 시작: 알았어. 고마워.
     0.95s  agent 발화 끝
     0.96s  agent 발화 시작: 도움이 되었다니 기쁘네요. 새로운 도시에 잘 정착하시길 응원할게요.
     0.96s  user  발화 끝
     1.00s  agent 발화 끝
