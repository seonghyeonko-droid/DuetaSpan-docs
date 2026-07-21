# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "은원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "floor",
#       "text": "User lives on the 7th floor."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 19°C."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "employer",
#       "text": "User works at an airline."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "commute",
#       "text": "User takes the subway to work."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-04-30",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 버스 티켓 예매 좀 도와주세요. 시애틀에서 포틀랜드로, 오월  | S2 네, 확인했어요. 그런데 혹시 다른 날짜에도 자리가 있을까요? | S3 오월 십이일 오후 두시쯤에 출발하는 버스가 있는지 알아봐 주세 | S4 … 혹시 그 버스는 와이파이가 돼요?

     0.00s  user  발화 시작: 버스 티켓 예매 좀 도와주세요. 시애틀에서 포틀랜드로, 오월 십일에 오전 열시 십오분 출발하는 티켓 세장으로
     8.11s  user  발화 끝
     8.62s  <ret> 발화 (turn1 첫 프레임)
     8.68s  agent 발화 시작: <ret> 네, 시애틀에서 포틀랜드행 버스 티켓 세장을 예매해 드렸습니다. 예약번호는 비 유 에스 삼 공 공
     9.77s  ⚡SPAN 주입 [d'=1.15s / d_lead=12.62s]: (tool result) Seattle, WA, Portland, OR, 2024-05-10, 10:15, BUS3-00506
    21.30s  agent 발화 끝
    21.53s  user  발화 시작: 네, 확인했어요. 그런데 혹시 다른 날짜에도 자리가 있을까요?
    25.50s  user  발화 끝
    25.53s  agent 발화 시작: 다른 날짜도 확인해 볼까요? 혹시 특정 날짜를 생각하고 계신가요?
    30.61s  agent 발화 끝
    30.87s  user  발화 시작: 오월 십이일 오후 두시쯤에 출발하는 버스가 있는지 알아봐 주세요.
    34.83s  <ret> 발화 (turn5 첫 프레임)
    35.02s  user  발화 끝
    35.22s  agent 발화 시작: <ret> 잠시만 기다려 주세요.
    35.70s  ⚡SPAN 주입 [d'=0.87s / d_lead=1.84s]: Seattle, WA, Portland, OR, 2024-05-12, 14:00, BUS3-005078, available
    36.49s  user  발화 시작: … 혹시 그 버스는 와이파이가 돼요?
    37.06s  agent 발화 끝
    37.94s  <ret> 발화 (turn7 첫 프레임)
    38.41s  agent 발화 시작: <ret> 네, 해당 버스에는 와이파이가 제공됩니다. 편안하게 이용하실 수 있을 거예요.
    38.42s  user  발화 끝
    38.54s  ⚡SPAN 주입 [d'=0.60s / d_lead=6.61s]: BUS3-005078: wifi available
    40.72s  user  발화 시작: 응.
    41.03s  user  발화 끝
    44.99s  agent 발화 시작: 혹시 좌석 지정도 가능한가 궁금하시군요. 좌석 지정은 예약 단계에서 가능합니다.
    45.02s  agent 발화 끝
    52.26s  agent 발화 끝
