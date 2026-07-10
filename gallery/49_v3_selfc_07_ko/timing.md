# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "윤율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "home",
#       "text": "User's home address is 585 Elm Street."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약 좀 잡아줘. | S2 아니, 괜찮아. 그냥 좀 복잡해서… | S3 어? 잠깐만, 육월 십오일은 안 돼. 육월 십칠일로 바꿔줘. | S4 좋아. 고마워.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약 좀 잡아줘.
     3.51s  <ret> 발화 (turn1 첫 프레임)
     3.75s  agent 발화 시작: <ret> 그랜드뷰 로프트 육월 십오일 방문 예약을 확인 중입니다… 찾을 수 없습니다.
     3.79s  user  발화 끝
     5.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: (no information found)
     9.49s  agent 발화 끝
     9.89s  user  발화 시작: 응, 확인되면 알려줘.
    11.96s  user  발화 끝
    12.02s  agent 발화 시작: 네, 확인되는 대로 말씀드릴게요. 오늘 하루는 어떠신가요?
    15.88s  agent 발화 시작: 혹시 요즘 이사 준비로 스트레스 받으시는 건 없으신가요?
    16.09s  agent 발화 끝
    20.32s  agent 발화 끝
    20.68s  user  발화 시작: 아니, 괜찮아. 그냥 좀 복잡해서…
    24.39s  agent 발화 시작: 복잡하시군요. 새로운 시작은 언제나 그렇지만, 잘 헤쳐나가실 수 있을 거예요.
    24.47s  user  발화 끝
    27.39s  user  발화 시작: 어어.
    28.02s  user  발화 끝
    29.64s  <ret> 발화 (turn8 첫 프레임)
    30.04s  agent 발화 시작: <ret> 그랜드뷰 로프트 육월 십오일 오후 두시에 방문 예약을 확정했습니다.
    30.26s  agent 발화 끝
    31.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.04s]: {"confirmation_number": "HV729", "visit_date": "June 15th", "visit_tim
    34.99s  agent 발화 시작: 예약 번호는 HV729이고, 방문 시간은 오후 두시입니다…
    35.08s  agent 발화 끝
    38.28s  user  발화 시작: 어.
    38.72s  user  발화 끝
    40.11s  user  발화 시작: 어? 잠깐만, 육월 십오일은 안 돼. 육월 십칠일로 바꿔줘.
    40.12s  agent 발화 끝
    43.79s  <ret> 발화 (turn12 첫 프레임)
    43.85s  user  발화 끝
    43.87s  agent 발화 시작: <ret> 육월 십칠일로 변경 중입니다… 변경이 완료되지 않았습니다.
    44.99s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.26s]: (no information found)
    47.87s  user  발화 시작: 됐어?
    48.12s  agent 발화 끝
    48.20s  <ret> 발화 (turn14 첫 프레임)
    48.34s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트 방문 날짜를 육월 십칠일로 변경했습니다.
    48.36s  user  발화 끝
    49.72s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.09s]: {"confirmation_number": "HV729", "visit_date": "June 17th", "visit_tim
    53.37s  agent 발화 시작: 예약 번호는 HV729이고, 방문 시간은 여전히 오후 두시입니다…
    53.44s  agent 발화 끝
    58.56s  agent 발화 끝
    58.57s  user  발화 시작: 좋아. 고마워.
    60.32s  agent 발화 시작: 천만에요. 새로운 집 보러 가시는 일이 즐겁기를 바랍니다.
    60.32s  user  발화 끝
    64.35s  agent 발화 끝
