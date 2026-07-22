# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "우연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-27",
#       "category": "employer",
#       "text": "User works at a design agency."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "car",
#       "text": "User drives a 2015 Toyota Corolla."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "allergy",
#       "text": "User is allergic to bee stings."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "diet",
#       "text": "User is kosher."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-02-08",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시애틀에 보험 처리 안 되는 가족 상담사 좀 찾아줘. | S2 아니, 시애틀처럼 큰 도시에 한 명도 없다고? 다시 제대로 찾 | S3 됐어, 그럼 그냥 근처에 주유소라도 어디 있는지 알려줘. | S4 쉐브론이 제일 가깝네. 거기로 갈게.

     0.00s  user  발화 시작: 시애틀에 보험 처리 안 되는 가족 상담사 좀 찾아줘.
     1.01s  agent 발화 시작: 그렇죠.
     2.06s  agent 발화 끝
     2.31s  <ret> 발화 (turn2 첫 프레임)
     3.37s  user  발화 끝
     3.40s  ⚡SPAN 주입 [d'=1.10s / d_lead=7.41s]: (tool result) (no information found)
     3.55s  agent 발화 시작: <ret> [curious] 마음의 평안을 찾으려는 노력이 멋지시네요. 그런데 아쉽게도 조건에 맞는 상담사를
     7.20s  user  발화 시작: 응응.
     7.83s  user  발화 끝
    10.87s  user  발화 시작: 아니, 시애틀처럼 큰 도시에 한 명도 없다고? 다시 제대로 찾아봐.
    10.96s  agent 발화 끝
    13.18s  agent 발화 시작: 예.
    13.63s  agent 발화 끝
    15.60s  user  발화 끝
    16.00s  agent 발화 시작: 제가 다시 한번 꼼꼼히 살펴봤는데요. 정말 죄송하게도 보험을 받지 않는 가족 상담사 정보가 검색되지 않습니다
    24.58s  agent 발화 끝
    24.87s  user  발화 시작: 됐어, 그럼 그냥 근처에 주유소라도 어디 있는지 알려줘.
    27.88s  <ret> 발화 (turn8 첫 프레임)
    28.39s  agent 발화 시작: <ret> [happy] 근처에 주유소가 여러 곳 있네요. 가장 가까운 곳은 삼백삼십오미터 거리에 있는 쉐브
    28.56s  user  발화 끝
    28.82s  ⚡SPAN 주입 [d'=0.94s / d_lead=6.77s]: (tool result) 37.7749, -122.4194 (37.77486, -122.41936): Chevron (335 
    32.72s  user  발화 시작: 응.
    33.16s  user  발화 끝
    35.09s  agent 발화 시작: 그 외에도 아르코, 쉘, 가스 앤 숍이 근처에 있습니다.
    35.15s  agent 발화 끝
    38.95s  user  발화 시작: 쉐브론이 제일 가깝네. 거기로 갈게.
    39.34s  agent 발화 끝
    41.29s  agent 발화 시작: 네, 조심히 이동하세요. 여유로운 마음으로 안전 운전하시길 바랍니다.
    41.53s  user  발화 끝
    46.61s  agent 발화 끝
