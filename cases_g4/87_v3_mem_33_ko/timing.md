# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "다완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-02",
#       "category": "hobby",
#       "text": "User is into film photography."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is French."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "sibling",
#       "text": "User has a younger sibling named Rin."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "allergy",
#       "text": "User is allergic to eggs."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-18",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-04-08",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 비라 님, 지금 서울은 몇 시인가요? | S2 맞아요! 그래서 이번 주말에 분위기 좋은 프랑스 식당에 가보려 | S3 아, 생각해보니 저 알레르기 있는 거 잊으시면 안 돼요. | S4 고마워요, 비라 님. 역시 꼼꼼하시네요.

     0.00s  agent 발화 시작: [happy] 안녕하세요 다완 님, 저는 비라입니다. 만나서 정말 반가워요!
     4.95s  agent 발화 끝
     5.22s  user  발화 시작: 비라 님, 지금 서울은 몇 시인가요?
     7.00s  <ret> 발화 (turn2 첫 프레임)
     7.43s  agent 발화 시작: <ret> 지금 서울 시간은 칠월 십일 오후 두시 삼십분입니다.
     7.61s  user  발화 끝
     8.25s  ⚡SPAN 주입 [d'=1.24s / d_lead=3.93s]: (tool result) 2026-07-10T14:30:00+09:00
    10.04s  user  발화 시작: 그렇죠.
    10.67s  user  발화 끝
    11.36s  agent 발화 끝
    11.49s  user  발화 시작: 아, 그렇군요. 제가 예전에 좋아하는 음식 말씀드렸던 것 같은데 기억하세요?
    15.70s  <ret> 발화 (turn5 첫 프레임)
    16.21s  agent 발화 시작: <ret> 네, 기록해 뒀어요. 다완 님이 가장 좋아하시는 음식은 프랑스 요리라고 하셨습니다.
    16.45s  user  발화 끝
    16.94s  ⚡SPAN 주입 [d'=1.24s / d_lead=1.82s]: [2026-03-21] User's favorite cuisine is French.
    20.11s  user  발화 시작: 그렇죠.
    20.56s  user  발화 끝
    22.88s  agent 발화 끝
    23.30s  user  발화 시작: 맞아요! 그래서 이번 주말에 분위기 좋은 프랑스 식당에 가보려고요.
    27.14s  agent 발화 시작: [happy] 정말 좋으시겠어요. 일정 짜실 때 제가 도와드릴 부분이 있을까요? 예를 들어—
    27.32s  user  발화 끝
    33.70s  user  발화 시작: 아, 생각해보니 저 알레르기 있는 거 잊으시면 안 돼요.
    34.32s  agent 발화 끝
    35.91s  <ret> 발화 (turn10 첫 프레임)
    36.39s  agent 발화 시작: <ret> 당연히 기억하고 있죠. 계란 알레르기가 있으시다고 기록되어 있습니다. 식당 예약하실 때 꼭 말씀드
    36.48s  user  발화 끝
    37.44s  ⚡SPAN 주입 [d'=1.53s / d_lead=1.89s]: [2026-02-09] User is allergic to eggs.
    39.02s  user  발화 시작: 네.
    39.41s  user  발화 끝
    44.59s  agent 발화 끝
    44.72s  user  발화 시작: 고마워요, 비라 님. 역시 꼼꼼하시네요.
    46.94s  user  발화 끝
    46.95s  agent 발화 시작: [laugh] 별 말씀을요. 다완 님이 안전하고 즐겁게 식사하시는 게 가장 중요하니까요.
    53.95s  agent 발화 끝
