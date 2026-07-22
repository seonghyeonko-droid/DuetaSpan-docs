# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Bruno",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "employer",
#       "text": "User works at a biotech lab."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "car",
#       "text": "User drives a 2018 Mazda CX-5."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "allergy",
#       "text": "User is allergic to soy."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "diet",
#       "text": "User is keto."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "learning",
#       "text": "User is learning to play guitar."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "sibling",
#       "text": "User has a younger sibling named Haruto."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "work",
#       "text": "User works as a small-business owner."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 워싱턴주 시애틀에 보험 처리 안 되는 가족 상담사 좀 찾아 줘 | S2 내 돈 내고 하는 거니까 노스웨스트 힐링이 더 낫겠다. 다음  | S3 잠깐, 생각해보니 열 시에 일정이 겹치네. 오후 두 시로 옮겨 | S4 아니, 그냥 취소해 줘. 확실하게 내가 직접 전화할게.

     0.00s  user  발화 시작: 워싱턴주 시애틀에 보험 처리 안 되는 가족 상담사 좀 찾아 줘.
     2.77s  <ret> 발화 (turn1 첫 프레임)
     3.65s  user  발화 끝
     3.69s  ⚡SPAN 주입 [d'=0.92s / d_lead=8.90s]: (tool result) (no information found)
     3.75s  agent 발화 시작: <ret> 음, 시애틀에서 보험 안 받는 가족 상담사를 찾아봤는데 아쉽게도 정보가 없네요. 조금 까다롭긴 하
     7.33s  user  발화 시작: 그래.
     7.91s  user  발화 끝
    12.65s  agent 발화 끝
    13.03s  user  발화 시작: 쓸모없네. 보험 상관없이 그냥 평점 높은 사람으로 찾으면 되잖아?
    17.38s  <ret> 발화 (turn4 첫 프레임)
    17.38s  user  발화 끝
    17.40s  agent 발화 시작: <ret> 답답하시겠어요. 검색 범위를 넓혀 볼게요. 확인해 보니 별점 사 점 팔 점인 시애틀 패밀리 웰니스
    19.34s  ⚡SPAN 주입 [d'=1.96s / d_lead=3.77s]: (tool result) Seattle Family Wellness: 4.8 stars, accepts most insuran
    23.75s  user  발화 시작: 오.
    24.20s  user  발화 끝
    30.11s  agent 발화 끝
    30.25s  user  발화 시작: 내 돈 내고 하는 거니까 노스웨스트 힐링이 더 낫겠다. 다음 주 월요일로 예약 잡아 줘.
    33.08s  agent 발화 시작: 그렇죠.
    33.76s  agent 발화 끝
    35.40s  <ret> 발화 (turn8 첫 프레임)
    35.83s  agent 발화 시작: <ret> 첫걸음을 떼는 게 가장 어려운 법이죠. 예약 완료됐어요. 칠 월 십삼 일 월요일 오전 열 시에 노
    36.00s  user  발화 끝
    36.63s  ⚡SPAN 주입 [d'=1.23s / d_lead=4.23s]: (tool result) Appointment confirmed for July 13, 2026, at 10:00 AM.
    45.13s  user  발화 시작: 잠깐, 생각해보니 열 시에 일정이 겹치네. 오후 두 시로 옮겨 줘.
    45.24s  agent 발화 끝
    49.75s  agent 발화 시작: 시간 변경이 가능한지 바로 확인해 볼게요—
    49.81s  user  발화 끝
    51.75s  user  발화 시작: 아니, 그냥 취소해 줘. 확실하게 내가 직접 전화할게.
    52.53s  agent 발화 끝
    55.36s  user  발화 끝
    55.57s  agent 발화 시작: [happy] 그럼요, 당연하죠. 가끔은 직접 통화하는 게 가장 마음 편한 방법이더라고요.
    61.08s  agent 발화 끝
