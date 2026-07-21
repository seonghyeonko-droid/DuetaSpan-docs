# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Robin",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-15",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "partner",
#       "text": "User's partner is named Jisoo."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "airline",
#       "text": "User usually flies with ANA."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-06-01",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-05-12",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-02-28",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Um, I was reading about the Panama | S2 Right, right. So, they were the fi | S3 Thirteen point four million… wow.  | S4 So, it’s all about hiding money, t

     0.00s  user  발화 시작: Um, I was reading about the Panama Papers and, welll… the Pa
     7.60s  <ret> 발화 (turn1 첫 프레임)
     7.77s  agent 발화 시작: <ret> [happy] Those papers were released by the Internationa
     7.87s  user  발화 끝
     7.90s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.97s]: The International Consortium of Investigative Journalists released bot
    15.45s  user  발화 시작: Mm-hmm.
    15.94s  user  발화 끝
    17.74s  agent 발화 끝
    18.50s  user  발화 시작: Oh, okay. And… hmmmm… the Süddeutsche Zeitung was involved, 
    23.04s  <ret> 발화 (turn4 첫 프레임)
    23.55s  agent 발화 시작: <ret> Yes, the Süddeutsche Zeitung received the initial leak
    23.78s  user  발화 끝
    23.84s  ⚡SPAN 주입 [d'=0.81s / d_lead=7.14s]: Süddeutsche Zeitung received the initial leak of 11.5 million files th
    30.69s  agent 발화 끝
    30.89s  user  발화 시작: Right, right. So, they were the first to get the files?
    32.35s  agent 발화 시작: Yeah.
    32.94s  agent 발화 끝
    34.71s  agent 발화 시작: That’s correct. They were the first to receive the files, th
    34.73s  user  발화 끝
    36.70s  user  발화 시작: Oh.
    37.15s  user  발화 끝
    39.58s  agent 발화 끝
    39.74s  user  발화 시작: What exactly *are* the Paradise Papers, then? Are they just…
    44.65s  <ret> 발화 (turn10 첫 프레임)
    44.75s  ⚡SPAN 주입 [d'=0.99s / d_lead=11.73s]: The Paradise Papers are 13.4 million leaked files relating to offshore
    44.78s  agent 발화 시작: <ret> The Paradise Papers are thirteen point four million le
    44.93s  user  발화 끝
    56.46s  user  발화 시작: Thirteen point four million… wow. That's a lot of data.
    56.51s  agent 발화 끝
    60.68s  agent 발화 시작: [surprised] It certainly is! That’s a huge amount of informa
    60.81s  user  발화 끝
    64.91s  user  발화 시작: Mm-hmm.
    65.55s  user  발화 끝
    67.03s  agent 발화 끝
    67.98s  user  발화 시작: (distant office chatter)
    69.93s  user  발화 시작: So, it’s all about hiding money, then? That sounds really st
    70.06s  user  발화 끝
    75.21s  user  발화 끝
    75.21s  agent 발화 시작: [sigh] It can be, absolutely. It often involves complex lega
    85.04s  agent 발화 끝
