# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "소우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "skill",
#       "text": "User is quite experienced with rock climbing."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "emergency",
#       "text": "User's emergency contact is Hana."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "sibling",
#       "text": "User has a younger sibling named Emma."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "child",
#       "text": "User has a child named Noah, age 12."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "floor",
#       "text": "User lives on the 7th floor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 안녕하세요. 요즘 회사 일이 너무 힘들어서 그래요. | S2 음… 출퇴근 시간이 너무 길어요. 집에서 회사까지 한 시간 반 | S3 사실 이사 생각은 하고 있는데, 정확히 어디로 가야 할지 몰라 | S4 …혹시 강남역 근처는 어때요?

     0.00s  agent 발화 시작: 안녕하세요, 소우님! 저는 트후나로라고 해요. 커리어 고민이나 스트레스 관리에 도움을 드릴 수 있는 커리어 
     7.74s  agent 발화 끝
     8.46s  user  발화 시작: 아, 안녕하세요. 요즘 회사 일이 너무 힘들어서 그래요.
    11.81s  agent 발화 시작: 힘드시군요. 혹시 지금 회사에서 어떤 점이 가장 어려우신가요?
    11.84s  user  발화 끝
    16.42s  user  발화 시작: 음… 출퇴근 시간이 너무 길어요. 집에서 회사까지 한 시간 반이나 걸려요.
    16.80s  agent 발화 끝
    19.26s  agent 발화 시작: 네.
    19.89s  agent 발화 끝
    21.50s  <ret> 발화 (turn5 첫 프레임)
    21.92s  user  발화 끝
    21.95s  agent 발화 시작: <ret> 소우님께서 칠층에 사시는군요. 혹시 회사 근처로 이사하는 것을 고려해 보셨나요?
    22.42s  ⚡SPAN 주입 [d'=0.92s / d_lead=6.02s]: [2025-12-15] User lives on the 7th floor.
    25.86s  user  발화 시작: 네.
    26.47s  user  발화 끝
    27.97s  agent 발화 끝
    28.02s  agent 발화 시작: 회사 근처로 이사하시면 출퇴근 시간을 많이 줄일 수 있을 텐데요.
    30.09s  user  발화 시작: 음.
    30.58s  user  발화 끝
    31.91s  user  발화 시작: 사실 이사 생각은 하고 있는데, 정확히 어디로 가야 할지 몰라서요. —
    32.38s  agent 발화 끝
    35.87s  user  발화 시작: …혹시 강남역 근처는 어때요?
    36.07s  user  발화 끝
    37.55s  <ret> 발화 (turn11 첫 프레임)
    37.73s  agent 발화 시작: <ret> 강남역 근처 아파트 매매가는 평균 십팔억원, 전세가는 구억원 정도라고 하네요. 다양한 크기와 구조
    37.94s  user  발화 끝
    38.14s  ⚡SPAN 주입 [d'=0.59s / d_lead=20.00s]: (tool result) 강남역 주변 아파트 매물 정보: 평균 매매가 18억원, 전세가 9억원. 다양한 크기와 구조의 아파트가
    57.73s  agent 발화 끝
