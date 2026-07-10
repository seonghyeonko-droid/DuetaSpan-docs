# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "연영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "home",
#       "text": "User's home address is 685 Maple Drive."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 버…라고요? 이름이 좀 특이하시네요. 혹시 외국분이세요? | S2 불안감과 함께… 그게 정말 가능할까요? 너무 힘든 일처럼 느껴 | S3 용기를 내라니… 쉽지 않아요. 괜히 짐이 될까 봐 걱정돼요. | S4 자신을 믿는다고… 그게 제일 어려운 것 같아요. 자존감이 너무

     0.00s  agent 발화 시작: 연영 씨, 안녕하세요. 저는 버라고 해요. 힘든 시간을 보내고 계신 분들을 돕는 상담사랍니다.
     9.69s  agent 발화 끝
    10.47s  user  발화 시작: 버…라고요? 이름이 좀 특이하시네요. 혹시 외국분이세요?
    15.20s  agent 발화 시작: [curious] 음, 그렇게 들릴 수도 있겠네요. 제 이름에 얽힌 이야기는 잠시 후에 말씀드릴게요. 지금 
    15.33s  user  발화 끝
    22.71s  user  발화 시작: 그냥… 요즘 좀 많이 흔들려요. 미래에 대한 불안감이 계속 커져서 잠도 제대로 못 자요.
    22.84s  agent 발화 끝
    27.14s  agent 발화 시작: 미래에 대한 불안감이라… 정말 힘드시겠어요. 어떤 점이 가장 불안하신가요? 구체적으로 말씀해주시면 좀 더 도
    27.38s  user  발화 끝
    31.61s  user  발화 시작: 어.
    32.24s  user  발화 끝
    34.33s  agent 발화 시작: 불안감이 커지는 건 당연한 일이에요. 변화를 앞두고 느끼는 자연스러운 감정이기도 하고요. 하지만 그 감정에 
    34.51s  agent 발화 끝
    41.93s  agent 발화 끝
    42.21s  user  발화 시작: 자신을 돌본다니… 그게 무슨 뜻이에요? 어떻게 해야 하는지 잘 모르겠어요.
    47.20s  user  발화 끝
    47.60s  agent 발화 시작: 자신을 돌보는 건, 좋아하는 일을 하거나, 편안함을 느끼는 시간을 갖는 거예요. 예를 들어, 따뜻한 차를 마
    53.16s  user  발화 시작: 어.
    53.79s  user  발화 끝
    54.84s  user  발화 시작: 좋아하는 음악… 그래요, 오랜만에 음악을 들어봐야겠네요. 근데 그게 불안감을 없애는 데 도움이 될까요?
    55.00s  agent 발화 끝
    58.71s  agent 발화 시작: 음악은 마음을 안정시키는 효과가 있답니다. 하지만 불안감을 완전히 없애는 건 어려울 수 있어요. 불안감과 함
    58.86s  user  발화 끝
    62.03s  user  발화 시작: 응.
    62.67s  user  발화 끝
    64.53s  user  발화 시작: 불안감과 함께… 그게 정말 가능할까요? 너무 힘든 일처럼 느껴져요.
    64.69s  agent 발화 끝
    69.61s  user  발화 끝
    69.90s  agent 발화 시작: [sigh] 가능해요. 처음에는 어렵겠지만, 꾸준히 노력하면 분명히 좋아질 거예요. 마치 어두운 터널을 지나
    73.58s  user  발화 시작: 음.
    74.21s  user  발화 끝
    74.95s  agent 발화 끝
    74.95s  user  발화 시작: 터널… 그 비유가 와닿네요. 근데 터널이 너무 길면 어떻게 하죠? 지쳐서 포기하고 싶어질까 봐 걱정돼요.
    79.16s  agent 발화 시작: 터널이 길다고 포기하지 마세요. 잠시 쉬어가도 괜찮아요. 주변 사람들에게 도움을 요청하거나, 잠시 멈춰서 숨
    79.30s  user  발화 끝
    85.18s  agent 발화 끝
    85.47s  user  발화 시작: 주변 사람… 사실 누구에게 털어놓을 수도 없어요. 다들 자기 힘든 일에 바빠 보이니까.
    90.33s  agent 발화 시작: 혼자 힘들어하지 마세요. 생각보다 많은 사람들이 당신의 이야기를 들어주고 싶어 할 거예요. 용기를 내서 마음
    90.52s  user  발화 끝
    97.23s  agent 발화 끝
    97.75s  user  발화 시작: 용기를 내라니… 쉽지 않아요. 괜히 짐이 될까 봐 걱정돼요.
   102.28s  user  발화 끝
   102.30s  agent 발화 시작: 당신의 감정은 소중하고, 표현될 가치가 있답니다. 짐이 되는 게 아니에요. 오히려 당신의 이야기가 다른 사람
   106.47s  user  발화 시작: 응.
   106.97s  user  발화 끝
   108.74s  user  발화 시작: 다른 사람에게 힘이 된다고… 그런 생각은 해본 적이 없어요.
   108.93s  agent 발화 끝
   113.92s  user  발화 끝
   113.96s  agent 발화 시작: 당신은 혼자가 아니에요. 주변에는 당신을 지지하고 응원하는 사람들이 많답니다. 그들의 도움을 받는 것을 두려
   117.82s  user  발화 시작: 응.
   118.04s  user  발화 끝
   120.68s  agent 발화 끝
   121.14s  user  발화 시작: [happy] 네… 그렇게 생각해야겠어요.
   124.84s  user  발화 끝
   125.10s  agent 발화 시작: 맞아요. 긍정적인 마음을 유지하는 게 중요하답니다. 그리고 자신을 믿는 것도 잊지 마세요. 당신은 충분히 강
   131.17s  agent 발화 끝
   131.92s  user  발화 시작: 자신을 믿는다고… 그게 제일 어려운 것 같아요. 자존감이 너무 낮아서.
   135.11s  agent 발화 시작: 자존감이 낮다고 해서 좌절하지 마세요. 자존감은 노력하면 충분히 높일 수 있답니다. 작은 성공 경험을 통해 
   135.15s  user  발화 끝
   140.88s  user  발화 시작: 작은 성공… 뭘 해야 할까요? 뭘 해야 자신감을 얻을 수 있을까요?
   141.09s  agent 발화 끝
   144.74s  agent 발화 시작: 작은 목표를 세우고, 하나씩 달성해나가는 거예요. 예를 들어, 매일 아침 삼십분씩 산책을 하거나, 새로운 취
   144.91s  user  발화 끝
   150.76s  user  발화 시작: 응.
   151.21s  user  발화 끝
   153.27s  agent 발화 끝
   153.28s  user  발화 시작: 취미… 뭘 시작해야 할까요? 아무것도 하고 싶은 게 없어요.
   155.12s  user  발화 끝
   155.14s  agent 발화 시작: 뭘 하고 싶은지 잘 모르겠다면, 예전에 좋아했던 일을 다시 해보는 것도 좋은 방법이에요. 아니면 새로운 것을
   159.02s  agent 발화 끝
