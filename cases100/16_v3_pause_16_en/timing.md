# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Nora",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "learning",
#       "text": "User is studying Japanese."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "allergy",
#       "text": "User is allergic to latex."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "sibling",
#       "text": "User has a younger sibling named Jisoo."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-05-08",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-05-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… | S2 …in it too? That’s cool. | S3 He sure did. I’m going through… | S4 …a big change right now, actually.

     0.00s  user  발화 시작: I was just wondering…
     0.99s  <ret> 발화 (turn1 첫 프레임)
     1.26s  agent 발화 시작: <ret> That would be Elizabeth Ashley, who first played Corie
     1.42s  user  발화 끝
     2.32s  ⚡SPAN 주입 [d'=1.33s / d_lead=11.41s]: Elizabeth Ashley originated the role of Corie Bratter in the 1963 Broa
    12.67s  agent 발화 끝
    13.08s  user  발화 시작: Oh, Robert Redford was…
    15.44s  user  발화 끝
    16.39s  user  발화 시작: …in it too? That’s cool.
    17.72s  agent 발화 시작: Yeah.
    18.35s  agent 발화 끝
    18.47s  user  발화 끝
    18.55s  <ret> 발화 (turn5 첫 프레임)
    18.65s  agent 발화 시작: <ret> Yes, it was a really important role for him early on, 
    19.25s  ⚡SPAN 주입 [d'=0.70s / d_lead=10.02s]: Robert Redford's performance in Barefoot in the Park marked an early a
    24.34s  user  발화 시작: Uh-huh.
    24.79s  user  발화 끝
    28.66s  agent 발화 끝
    29.60s  user  발화 시작: He sure did. I’m going through…
    31.82s  user  발화 끝
    32.78s  user  발화 시작: …a big change right now, actually.
    34.94s  user  발화 끝
    35.15s  agent 발화 시작: Big changes can be unsettling, but also full of possibility.
    46.33s  agent 발화 끝
