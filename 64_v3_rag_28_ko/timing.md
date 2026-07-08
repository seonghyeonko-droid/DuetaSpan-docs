# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 해리 포터 다시 읽었어?
     2.53s  agent 발화 시작: 좋은 시리즈지, 그렇지? 상상력이 진짜 대단해.
     2.53s  user  발화 끝
     5.57s  user  발화 시작: 응, 진짜 그래. 혹시 누가 해리한테 자기가 마법사라는 걸 처음 말해줬는지 기억하려고 했어.
     5.57s  agent 발화 끝
    12.16s  agent 발화 시작: <ret> 그거 좋은 질문인데. 해그리드가 해리의 열한 번째 생일에 그 소식을 전했어.
    12.16s  <ret> 발화 (turn3 첫 프레임)
    12.16s  user  발화 끝
    13.12s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.03s]: Rubeus Hagrid is the first character to tell Harry Potter that he is a
    17.73s  user  발화 시작: 아, 맞다! 해그리드였지. 맨날 그 세부 사항을 까먹어.
    17.73s  agent 발화 끝
    21.79s  agent 발화 시작: 그럴 만해. 이야기가 너무 자세하잖아. 작은 순간들이 잊혀지기 쉽지.
    21.79s  user  발화 끝
    26.35s  user  발화 시작: 그렇지. 그리고 해그리드가 그 말 해주고 나서 뭘 해?
    26.35s  agent 발화 끝
    30.91s  agent 발화 시작: <ret> 설명할 게 좀 많았지. 해그리드는 해리를 학교 용품 사러 대각로 동행했어.
    30.91s  <ret> 발화 (turn7 첫 프레임)
    30.91s  user  발화 끝
    31.91s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.55s]: Hagrid takes Harry to Diagon Alley to purchase school supplies and a w
    36.48s  user  발화 시작: 대각로, 그렇지. 진짜 멋진 곳이야. 음, 해그리드는 호그와트에서 선생님이야?
    36.48s  agent 발화 끝
    41.04s  agent 발화 시작: 딱히 선생님은 아니고, 호그와트의 사육 담당자이자 마법 생물 돌보기를 가르쳐.
    41.04s  user  발화 끝
    46.10s  user  발화 시작: 맞아, 마법 생물 돌보기. 그 수업은 항상… 재밌었지.
    46.10s  agent 발화 끝
    50.16s  agent 발화 시작: [laugh] 진짜 그랬잖아? 가끔 좀 혼란스럽기도 하고.
    50.16s  user  발화 끝
    53.70s  user  발화 시작: 정말 그랬어. 그래서 해그리드는… 정확히 어떤 생물이야?
    53.70s  agent 발화 끝
    57.25s  agent 발화 시작: <ret> 자주 물어보는 질문인데. 해그리드 엄마는 마녀고, 아빠는 거인이었어.
    57.25s  <ret> 발화 (turn13 첫 프레임)
    57.25s  ⚡SPAN 주입 [d'=0.00s / d_lead=2.03s]: Rubeus Hagrid is a half-giant, the son of a giant and a human witch.
    57.25s  user  발화 끝
    61.30s  user  발화 시작: 반쪽 거인이구나! 뭔가 다르긴 했었지. 키가 엄청 크잖아.
    61.30s  agent 발화 끝
    65.36s  agent 발화 시작: 사람들 앞에서 눈에 띄지. 덩치에 비해 마음이 엄청 착해.
    65.36s  user  발화 끝
    69.92s  user  발화 시작: 그래. 어렸을 때… 좀 달랐다고 느꼈을까?
    69.92s  agent 발화 끝
    72.96s  agent 발화 시작: 다르다는 게 힘들었을 거라고 생각해. 특히 그 세계에서는.
    72.96s  user  발화 끝
    77.01s  user  발화 시작: 응, 그렇지. 힘들었을 거야.
    77.01s  agent 발화 끝
    79.04s  agent 발화 시작: 사실 그 책에서 아주 아름답게 다루는 주제야— 받아들임과 이해.
    79.04s  user  발화 끝
    83.60s  user  발화 시작: 맞아. 정말 강력한 메시지야.
    83.60s  agent 발화 끝
    85.62s  user  발화 끝
