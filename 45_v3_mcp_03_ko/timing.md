# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "유준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 오늘 저녁에 볼 만한 영화 있을까요? | S2 '행오버' 예매해 주세요. | S3 네, 그렇게 해주세요. | S4 아니요, 괜찮습니다. 감사합니다.

     0.00s  user  발화 시작: 혹시 오늘 저녁에 볼 만한 영화 있을까요?
     2.66s  <ret> 발화 (turn1 첫 프레임)
     2.98s  agent 발화 시작: <ret> 영화 검색해 드릴게요. 어떤 장르를 좋아하시나요?
     3.18s  user  발화 끝
     4.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.52s]: (no information found)
     6.46s  agent 발화 시작: 죄송하지만, 선호하는 장르를 말씀해 주셔야 영화를 찾아드릴 수 있어요.
     6.50s  agent 발화 끝
    10.90s  agent 발화 끝
    11.27s  user  발화 시작: 음… 코미디요.
    12.37s  <ret> 발화 (turn4 첫 프레임)
    12.77s  agent 발화 시작: <ret> 코미디 영화라면… 코미디 영화로는 '행오버'가 있고, '브라이즈메이드', '슈퍼배드'도 있어요.
    13.02s  user  발화 끝
    13.09s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.15s]: (tool result) The Hangover, 2009; Bridesmaids, 2011; Superbad, 2007
    16.71s  user  발화 시작: 네.
    17.16s  user  발화 끝
    17.92s  agent 발화 시작: 혹시 다른 장르도 괜찮으신가요?
    17.96s  agent 발화 끝
    19.80s  agent 발화 끝
    20.25s  user  발화 시작: '행오버' 예매해 주세요.
    21.83s  <ret> 발화 (turn8 첫 프레임)
    22.18s  user  발화 끝
    22.23s  agent 발화 시작: <ret> '행오버' 예매를 도와드릴게요. '행오버' 영화, 날짜는 칠월 십일일 저녁 일곱 시 반, 좌석은 
    22.33s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.63s]: (tool result) Movie: The Hangover, Date: July 11, 2026, Time: 7:30 PM,
    35.27s  agent 발화 끝
    35.29s  user  발화 시작: 네, 그렇게 해주세요.
    36.26s  <ret> 발화 (turn10 첫 프레임)
    36.58s  agent 발화 시작: <ret> 문자로 예매 정보를 보내드렸습니다.
    36.72s  user  발화 끝
    37.30s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.58s]: (tool result) SMS sent to +821099998888, Message: "The Hangover, July 
    39.16s  agent 발화 끝
    39.16s  agent 발화 시작: 문자로 예매 정보를 보내드렸습니다.
    41.29s  agent 발화 끝
    42.43s  user  발화 시작: 아니요, 괜찮습니다. 감사합니다.
    44.38s  agent 발화 시작: 즐거운 영화 관람 되세요.
    44.55s  user  발화 끝
    46.09s  agent 발화 끝
