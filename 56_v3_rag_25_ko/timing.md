# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 오늘 하루 어떠세요?
     1.96s  agent 발화 시작: 네, 괜찮습니다. 물어봐 주셔서 감사합니다. 생각하기 좋은 날씨인데, 동의하시겠어요?
     1.96s  user  발화 끝
     6.36s  user  발화 시작: 네, 그렇네요. 음… 혹시 필 도너휴가 투데이 쇼에서 누구를 대신했는지 궁금해요.
     6.36s  agent 발화 끝
    11.74s  agent 발화 시작: <ret> 그거 참 흥미로운 질문이네요. 잠깐만 찾아볼게요… [pause] 도너휴가 대신해서 공동 진행을 맡
    11.74s  <ret> 발화 (turn3 첫 프레임)
    11.74s  user  발화 끝
    12.74s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.34s]: Phil Donahue replaced Jim Hartz as co-host of NBC’s Today show on Sept
    19.08s  user  발화 시작: 음-
    19.08s  agent 발화 끝
    19.57s  user  발화 시작: 9월 8일, 와. 정말 오래됐네요. 혹시 도너휴 쇼를 본 적 있어요?
    19.57s  user  발화 끝
    24.95s  agent 발화 시작: 물론 방송될 때 직접 보지는 못했죠. 하지만 방송 대본을 연구했어요. 그는 꽤 파격적인 영향을 끼쳤고, 경계
    24.95s  user  발화 끝
    33.76s  user  발화 시작: 파격적이라고요? 어떻게 그렇게 말할 수 있죠?
    33.76s  agent 발화 끝
    36.69s  agent 발화 시작: 그는 전통적인 인터뷰 형식을 벗어나 논쟁적인 문제에 집중했고, 종종 목소리를 내지 못했던 사람들에게 발언의 
    36.69s  user  발화 끝
    48.43s  user  발화 시작: 그렇군요… 흥미롭네요. 그럼 하츠는 그냥 그만둔 건가요? 해고된 건 아니겠죠?
    48.43s  agent 발화 끝
    53.33s  agent 발화 시작: <ret> 단순한 해고는 아니었던 것 같아요.
    53.33s  <ret> 발화 (turn10 첫 프레임)
    53.33s  user  발화 끝
    54.33s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.45s]: Jim Hartz resigned from the Today show in 1980, citing creative differ
    55.77s  user  발화 시작: 창의적인 견해 차이군요, 흐음. 꽤 공손하게 말하는 것 같아요.
    55.77s  agent 발화 끝
    60.18s  agent 발화 시작: 보통 그런 표현은 더 복잡한 현실을 가리는 경우가 많아요. 방송국에서도 정치적인 술수가 흔했죠.
    60.18s  user  발화 끝
    66.54s  user  발화 시작: 맞아요, 그런 것 같아요. 있잖아요, 켈리 워드에 대해 아는 게 있어요?
    66.54s  agent 발화 끝
    71.92s  agent 발화 시작: <ret> 켈리 워드는 애리조나 출신의 의사이자 정치인이에요. 애리조나 공화당 의장을 역임했고요.
    71.92s  <ret> 발화 (turn14 첫 프레임)
    71.92s  user  발화 끝
    72.92s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.89s]: Kelli Ward is an osteopathic physician and politician who served as th
    76.81s  user  발화 시작: 아, 그렇군요. 알아두니 좋네요. 방금 그녀에 대한 기사를 읽고 있었어요.
    76.81s  agent 발화 끝
    81.70s  agent 발화 시작: 미국 남서부의 정치는 정말 흥미로운데, 특히 지역 전통과 전국적인 추세의 상호 작용이 그렇죠. 튀부크투와 하
    81.70s  user  발화 끝
    91.98s  user  발화 시작: [chuckle] 꽤 대단한 비교인데요. 그런데, 도너휴로 다시 돌아가서… 하츠는 그때 괜찮았나요?
    91.98s  agent 발화 끝
    97.36s  agent 발화 시작: <ret> 도너휴가 오기 전에는 하츠가 제인 폴리와 함께 안정적인 시기를 보냈어요. 두 사람은 인기가 많았죠
    97.36s  <ret> 발화 (turn18 첫 프레임)
    97.36s  user  발화 끝
    98.36s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.85s]: Jim Hartz and Jane Pauley co-hosted the Today show from 1976 to 1980, 
   104.21s  user  발화 시작: 그럼 스캔들이나 그런 게 있어서 그만둔 게 아니군요?
   104.21s  agent 발화 끝
   108.12s  agent 발화 시작: 아니요, 보고서에 따르면 쇼의 방향에 대한 비전 차이 때문이었어요. 성격 충돌이라고 할 수도 있겠죠.
   108.12s  user  발화 끝
   114.97s  user  발화 시작: 맞아요. 그게 말이 되네요. 전체 이야기를 알게 되어서 다행이에요.
   114.97s  agent 발화 끝
   119.37s  agent 발화 시작: 역사의 뉘앙스를 이해하려면 헤드라인 너머를 살펴봐야 해요. 서아프리카의 구전 전통이 그걸 가르쳐줬죠.
   119.37s  user  발화 끝
   125.25s  user  발화 시작: 좋은 말씀이네요. 정보 많이 알려주셔서 감사합니다, 모시.
   125.25s  agent 발화 끝
   128.67s  agent 발화 시작: 도와드릴 수 있어서 기쁩니다. 아는 것을 공유하게 되어 기뻐요.
   128.67s  user  발화 끝
   133.07s  agent 발화 끝
