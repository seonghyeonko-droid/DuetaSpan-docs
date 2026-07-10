# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "소경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 동남아시아에 지리적으로 속하지 않는 섬들이 어디야? | S2 그럼, 혹시 서울 날씨는 어때? 지금? | S3 고마워. 혹시 내일 모레가 무슨 요일이야? | S4 아직은… 뭘 해야 할지 고민 중이야.

     0.00s  user  발화 시작: 동남아시아에 지리적으로 속하지 않는 섬들이 어디야?
     2.80s  <ret> 발화 (turn1 첫 프레임)
     2.96s  user  발화 끝
     3.03s  agent 발화 시작: <ret> 음, 죄송하지만 그 질문에 대한 정보는 찾을 수 없었어요. 아직 그 부분은 파악되지 않은 것 같아
     3.04s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.33s]: (no information found)
     6.15s  user  발화 시작: 응.
     6.47s  user  발화 끝
     8.36s  agent 발화 끝
     9.68s  user  발화 시작: 그럼, 혹시 서울 날씨는 어때? 지금?
    11.75s  <ret> 발화 (turn4 첫 프레임)
    11.98s  agent 발화 시작: <ret> 서울 날씨는 현재 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요. 
    11.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    12.22s  user  발화 끝
    19.26s  agent 발화 끝
    19.60s  user  발화 시작: 고마워. 혹시 내일 모레가 무슨 요일이야?
    21.95s  <ret> 발화 (turn6 첫 프레임)
    22.09s  user  발화 끝
    22.18s  agent 발화 시작: <ret> 내일 모레는 일요일이 될 거예요. 지금이 금요일이니까요. 주말 계획 있으세요?
    22.19s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.63s]: It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul right now.
    26.82s  agent 발화 끝
    28.11s  user  발화 시작: 아직은… 뭘 해야 할지 고민 중이야.
    30.48s  agent 발화 시작: 고민이시군요. 뭐든 너무 조급해하지 마세요. 잠시 시간을 갖고 생각을 정리하는 것도 좋은 방법이에요.
    30.69s  user  발화 끝
    36.69s  agent 발화 끝
